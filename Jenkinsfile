pipeline{
    agent {
        dockerfile true
    }
    stages{
        stage('build'){
            steps{
            sh 'docker compose up'
        }
    }
}
}