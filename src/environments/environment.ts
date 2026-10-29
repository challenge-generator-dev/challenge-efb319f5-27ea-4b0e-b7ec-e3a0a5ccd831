export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  cloudServices: {
    compute: 'http://localhost:3001/compute',
    storage: 'http://localhost:3002/storage',
    database: 'http://localhost:3003/database',
    messaging: 'http://localhost:3004/messaging',
    cdn: 'http://localhost:3005/cdn'
  },
  awsConfig: {
    region: 'us-east-1',
    s3Bucket: 'pago-rapido-dev',
    lambdaEndpoint: 'http://localhost:4000/lambda',
    dynamoEndpoint: 'http://localhost:4000/dynamo',
    sqsEndpoint: 'http://localhost:4000/sqs',
    cloudwatchEndpoint: 'http://localhost:4000/cloudwatch'
  },
  azureConfig: {
    subscriptionId: 'dev-subscription-id',
    resourceGroup: 'pago-rapido-dev-rg',
    storageAccount: 'pagorapidodev',
    functionsEndpoint: 'http://localhost:5000/functions',
    cosmosEndpoint: 'http://localhost:5000/cosmos',
    serviceBusEndpoint: 'http://localhost:5000/servicebus'
  },
  gcpConfig: {
    projectId: 'pago-rapido-dev',
    region: 'us-central1',
    gcsBucket: 'pago-rapido-dev',
    cloudFunctionsEndpoint: 'http://localhost:6000/functions',
    firestoreEndpoint: 'http://localhost:6000/firestore',
    pubsubEndpoint: 'http://localhost:6000/pubsub'
  },
  features: {
    enableAnalytics: true,
    enableCaching: true,
    enableLogging: true,
    debugMode: true,
    mockExternalServices: true
  },
  timeouts: {
    apiRequest: 30000,
    cloudOperation: 120000,
    databaseQuery: 10000
  },
  scaling: {
    minInstances: 1,
    maxInstances: 3,
    targetCpuPercent: 70,
    scaleUpCooldown: 300,
    scaleDownCooldown: 600
  },
  monitoring: {
    logLevel: 'debug',
    metricsEnabled: true,
    tracingEnabled: true,
    sampleRate: 1.0
  },
  security: {
    corsOrigins: ['http://localhost:4200'],
    enableHttps: false,
    tokenExpiry: 3600,
    refreshTokenExpiry: 86400
  },
  cache: {
    ttl: 300,
    maxSize: 100,
    strategy: 'lru'
  },
  retryPolicy: {
    maxAttempts: 3,
    backoffMultiplier: 2,
    initialDelay: 1000,
    maxDelay: 10000
  },
  circuitBreaker: {
    failureThreshold: 5,
    timeout: 60000,
    resetTimeout: 30000
  }
};