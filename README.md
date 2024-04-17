# clooudWatch-infrequent-access
Explore the new AWS CloudWatch Infrequent Access with AWS CloudFormation or SAM

Here is how you can define a newly launched [AWS CloudWatch Infrequent Access](https://aws.amazon.com/blogs/aws/new-amazon-cloudwatch-log-class-for-infrequent-access-logs-at-a-reduced-price/) class log group with AWS CloudFormation and AWS SAM. 

Read the detail in this [LinkedIn Article](https://www.linkedin.com/pulse/aws-cloudwatch-infrequent-access-lambda-serverless-save-affan-shahab-zylxc/)

## How to use this?

This is very simple mock project demonstrating the implementation for CloudWatch Infrequent Access Log group with Serverless Lambda. This assumes that engineer using this project knows about AWS CLI, AWS SAM, and basics of AWS Serverless computing.

run `sh sam-build.sh` in the root folder of this project to deploy. Make sure to update the bucket and region name in the script.
