node('docker') {
    def tag = 'dev'
    stage('Checkout') {
        git branch: "${env.branch}", credentialsId: 'git.matador', url: "${env.gitUrl}"
    }

    stage('Build & push to registry') {
        withDockerRegistry(credentialsId: 'pqm-registry.azure', url: 'https://vpcpqmregistry.azurecr.io') {
            def buildEnv = 'dev'
            sh "Docker/build.sh $tag"
        }
    }
    
    stage('Deploy') {
        def destDir = '/app/matadorsuite-web'
        def destHost = 'pqmadmin@10.5.1.12'

        sh """
            ssh ${destHost} 'mkdir -p ${destDir}'
            scp Docker/docker-compose.yml ${destHost}:${destDir}
        """

        withCredentials([usernamePassword(credentialsId: 'pqm-registry.azure', passwordVariable: 'password', usernameVariable: 'username')]) {
            sh "ssh ${destHost} 'bash -s' < Docker/docker-compose.sh ${env.USERNAME} ${env.PASSWORD} ${destDir}"
        }

    }
}
