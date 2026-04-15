pipeline {
    agent any

    stages {

        stage('Build User Service') {
            agent {
                docker {
                    image 'node:18'
                }
            }
            steps {
                sh 'cd microservice && npm install'
            }
        }

        stage('Build Product Service') {
            agent {
                docker {
                    image 'node:18'
                }
            }
            steps {
                sh 'cd product-service && npm install'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t ayyuraj/microservice ./microservice'
                sh 'docker build -t ayyuraj/product-service ./product-service'
            }
        }
    }
}
