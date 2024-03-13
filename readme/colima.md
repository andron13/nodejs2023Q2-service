brew install minikube
brew install colima
brew install docker
brew install docker-compose

colima start -f
brew services start colima
minikube start
minikube addons enable metrics-server
kubectl get pods
kubectl top pods
./run-k8s.sh start
kubectl apply -f ./internal/_testdata/deployment.yaml
kubectl delete -f ./internal/_testdata/deployment.yaml
