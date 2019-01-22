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

    stage('Push coverage report') {
        dir('coverage') {
            git branch: 'master', credentialsId: 'git.matador', url: 'https://git.matadorsuite.com/matadorsuite/test-result/web-deploy.git'
            def containerName = 'matadorsuite-web-coverage'
            def imageName = 'vpcpqmregistry.azurecr.io/matadorsuite-web:dev'
            withCredentials([usernamePassword(credentialsId: 'git.matador', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                sh """
                docker rm -f $containerName || echo 'Ignored'
                docker run -d --name $containerName $imageName
                docker cp $containerName:/coverage/. .
                docker rm -f $containerName
                git config --local user.name jenkins_matadorsuite
                git config --local user.email jenkins_matadorsuite@ais.co.th
                git add --all
                git commit -m 'coverage report from build #${env.BUILD_NUMBER}'
                git push https://$USERNAME:$PASSWORD@git.matadorsuite.com/matadorsuite/test-result/web-deploy.git
                """
            }
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


