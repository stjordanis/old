---
title: "Docker Compose"
description: "Quickly deploy your instances without having to manage kubernetes"
position: 1
category: "Enterprise"
version: 1.4
fullscreen: false
menuTitle: "Rocker Compose"
---

<CenteredImage src="octopus.png" width="42%" />

DataTorch also support docker-compose setup as an easier alterative to
kubernetes.

::: warning
Do not use docker-compose for production if you need to scale to
many users.
:::

Please make sure you have both docker and docker-compose installed. Once
completed, created a copy of the `docker-compose.yaml` local and change any
values inside to fit your needs.

::: details Show docker-compose.yaml

:::

Run docker-compose inside the same directory to create the containers.

```bash
docker-compose up
```
