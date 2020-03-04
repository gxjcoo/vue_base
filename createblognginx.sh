sudo docker stop blognginx || true \
 && sudo docker rm blognginx || true \
 && pwd \
 && sudo cd /root/docker/jenkins_home/workspace/blog  \
 && pwd \
 && sudo docker  build ./  -t blognginx   \
 && sudo docker run -d -p 80:80 --name blognginx -v /root/docker/jenkins_home/workspace/blog/dist:/usr/share/nginx/html -v /root/docker/jenkins_home/workspace/blog/nginx.conf:/etc/nginx/nginx.conf blognginx