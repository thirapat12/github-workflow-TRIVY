pipeline {
    agent {
        kubernetes {
            yaml """
            apiVersion: v1
            kind: Pod
            spec:
                containers:
                  - name: kubectl-example
                    image: devops/alpine/helm-kubectl:3.8.2
                    command:
                    - cat
                    tty: true
                  - name: docker-daemon
                    image: docker:stable-dind
                    alwaysPullImage: false
                    securityContext:
                      privileged: true
                    env:
                    - name: DOCKER_TLS_CERTDIR
                      value: ""
                    volumeMounts:
                    - name: docker-volume
                      mountPath: /var/lib/docker
                      subpath: k8s-example
                  - name: docker
                    image: docker
                    alwaysPullImage: false
                    command:
                    - cat
                    tty: true
                    env:
                    - name: DOCKER_HOST
                      value: tcp://localhost:2375
                volumes:
                    - name: docker-volume
                      emptyDir: {}
            """
        }
    }
    stages {
		stage ('Checkout') {
			steps {
				script {
                    checkout scm
                }
			}
		}
		stage('Build image') {
			steps {
				script {
                    container('docker') {
                        sh '''
                            docker build -t registry.matador.ais.co.th/devops/landing-page:2.0.1 .
                            docker images 
                        '''
					}
				}
			}
		}
		stage('Publish image to lib or registry.matador.ais.co.th as lib.matador.ais.co.th') {
			steps {
				script {
                    withCredentials([usernamePassword(credentialsId: 'ci-push-lib', passwordVariable: 'pass', usernameVariable: 'user')]) {
						container('docker') {
							sh """
                                docker login registry.matador.ais.co.th -u ${user} -p ${pass}
							    docker push registry.matador.ais.co.th/devops/landing-page:2.0.1
							"""
                        }
                    }
				}
			}
		}
        stage('kubectl deploy cilandingpage'){
            steps{
                script{
                    withCredentials([file(credentialsId: 'ci-old-cluster', variable: 'KUBECONFIG')]) {
                        container('kubectl-example'){     
                            sh '''
                                kubectl version
                                kubectl get node -o wide
                                kubectl get ns
                                kubectl get pod -n landingpage-cimatador
                                kubectl apply -f landing-ci.yml -n landingpage-cimatador
                                kubectl get pod -n landingpage-cimatador
                            '''
                        }  
                    }   
                }
            }
        } 
    }
}
