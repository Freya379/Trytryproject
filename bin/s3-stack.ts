import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

class S3Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MyUploadBucket', {
      bucketName: 'my-upload-bucket',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publicReadAccess: false, // 设置 bucket 为私有
    });
  }
}

const app = new cdk.App();
new S3Stack(app, 'S3Stack');