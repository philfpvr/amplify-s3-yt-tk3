import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

defineBackend({
  auth,
  data,
  
});


backend.addOutput({
  storage: {
    aws_region: "eu-west-1",
    bucket_name: "drm-vod-2"
  },
});