pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Ayyappa-07/your-repo.git'
            }
        }

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
