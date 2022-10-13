### To build the image for the application

```

docker build -t <image_name> .


```


### To run that image in container

```
docker run -d -p 3000:3000 --name <container_name> <image_name>