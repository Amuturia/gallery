
pipeline {
    agent any

    stages {
        stage ('checkout') {
            steps {
               git 'https://github.com/Amuturia/gallery.git'
            }
        
        }
        stage ('install dependancies') {
            steps {
                sh 'npm install'
            }

        }
        stage ('Build') {
            steps {
                sh 'npm run server'
            }
        }


        stage ('start') {
            steps {
                sh 'node server'
            }
        }
    }


  //Student email notification 
    post {  
         success {  
                mail bcc: '', 
	        	body: 'This has been a successfull pipeline deploy', 
		        subject: 'Successful Deploy', 
		        to: 'antony.muturia@student.moringaschool.com';
         } 

         failure {  
             mail bcc: '', 
             body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", 
             cc: '', charset: 'UTF-8', 
             from: '', 
             mimeType: 'text/html', 
             replyTo: '', 
             subject: "ERROR CI: Project name -> ${env.JOB_NAME}", 
             to: "antony.muturia@student.moringaschool.com";  
         }  
         
     }  

}
