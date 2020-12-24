---
title: Docker Compose
description: Quickly deploy your instances without having to manage kubernetes
position: 1000
category: enterprise
---

<CenteredImage src="octopus.png" width="42%" />

DataTorch also support docker-compose setup as an easier alterative to
kubernetes.

<alert>

Do not use docker-compose for production if you need to scale to
many users.

</alert>

Please make sure you have both docker and docker-compose installed. Once
completed, created a copy of the `docker-compose.yaml` local and change any
values inside to fit your needs.

Run docker-compose inside the same directory to create the containers.

```bash
docker-compose up
```
