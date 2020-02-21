# Mock and Replay

A very little wrapper around yakbak that can be configured against any API.

Just set the `PORT` to serve it on and the `MOCKED_URL` and each request will be first recorded and then served as a stub.
To run this on a Kubernetes cluster just run `kubectl apply -f ./deployment.yaml`.
