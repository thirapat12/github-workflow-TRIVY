node('docker') {
    def tag = 'latest'
    stage('Checkout') {
        git branch: "${env.branch}", credentialsId: 'git.matador', url: "${env.gitUrl}"

        def tempTag = sh script: 'git tag --points-at HEAD | tail -1', returnStdout: true

        if(tempTag != '') {
            tag = tempTag
        }

    }
    stage('Build & push to registry') {
        withDockerRegistry(credentialsId: 'pqm-registry.azure', url: 'https://vpcpqmregistry.azurecr.io') {
            def buildEnv = 'prod'
            sh "Docker/build.sh $tag"
        }

    }
    stage('Deploy') {
        def destDir = '/app/matadorsuite-web'
        def destHost = 'pqmadmin@10.5.1.11'

        sh """
            ssh ${destHost} 'mkdir -p ${destDir}'
            scp Docker/docker-compose.yml ${destHost}:${destDir}
        """

        withCredentials([usernamePassword(credentialsId: 'pqm-registry.azure', passwordVariable: 'password', usernameVariable: 'username')]) {
            sh "ssh ${destHost} 'bash -s' < Docker/docker-compose.sh ${env.USERNAME} ${env.PASSWORD} ${destDir}"
        }

    }
}