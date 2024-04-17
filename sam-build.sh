cd src/utility
npm i
cd ../job
npm i
cd ../../

sam build --template-file template.yaml

sam deploy \
    --template-file .aws-sam/build/template.yaml \
    --stack-name cloud-watch-infrequent-access \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --s3-bucket <YOUR-BUCKET-NAME> \
    --region <YOUR_REGION>
