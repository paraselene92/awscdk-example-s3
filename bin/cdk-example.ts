#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { CdkExampleStack } from '../lib/cdk-example-stack';

const app = new cdk.App();
new CdkExampleStack(app, 'CdkExmapleStack');
app.run();
