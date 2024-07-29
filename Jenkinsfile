pipeline {
    agent any

       environment {
        SLACK_CHANNEL = 'antony_ip-1'
        SLACK_CREDENTIALS = 'slack-webhook' // replace with your actual Slack credentials ID
    }

    tools {
        nodejs "node"
        // the tool is getting information from the nodejs global configuration (Dashboard>manage jenkins>tools>nodejs configuration)
    }
    
    stages {
        stage('Checkout & Install Dependencies') {
            steps {
                // Clone the repository (replace with your actual repository URL)
                git branch: 'master', url: 'https://github.com/Amuturia/gallery.git'
                // Install npm dependencies
               
            }
        }
        stage ("Build") {
            steps {
                // To npm install at jenkins pipeline
                sh 'npm install'
               
            }
            
        }
        stage ("Test") {
            steps {
                //To run the test in jenkinsfile
               sh 'npm test'
            }
        }
        stage ("Run") {
            steps {
                //Now to add a step to run the website
                sh 'node server'
            }
        }
        
    }
      //Student email notification 
    post {  
         success {  
              slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'good',
                message: "Build Success: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})",
                tokenCredentialId: env.SLACK_CREDENTIALS
            )
            mail bcc: '', 
                body: "<b>Pipeline Successfull!</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL of the build: ${env.BUILD_URL}", 
                cc: '', charset: 'UTF-8', 
                from: '', 
                mimeType: 'text/html', 
                replyTo: '', 
		        subject: 'Successful Deploy!', 
		        to: 'antony.muturia@student.moringaschool.com';
         } 

         failure {  
            slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'danger',
                message: "Build Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})",
                tokenCredentialId: env.SLACK_CREDENTIALS
            )
             mail bcc: '', 
                body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL of the build: ${env.BUILD_URL}", 
                cc: '', charset: 'UTF-8', 
                from: '', 
                mimeType: 'text/html', 
                replyTo: '', 
                subject: "ERROR CI: Project name -> ${env.JOB_NAME}", 
                to: "antony.muturia@student.moringaschool.com";  
         }  
         
    }
}