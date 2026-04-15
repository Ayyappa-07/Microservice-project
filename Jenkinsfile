pipeline {
    agent any

    stages {

        stage('Build User Service') {
            steps {
                sh 'cd microservice && npm install'
            }
        }

        stage('Build Product Service') {
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

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push ayyuraj/microservice'
                sh 'docker push ayyuraj/product-service'
            }
        }
    }
}
