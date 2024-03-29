---
title: Agents
description: Agents used to run pipelines
position: 501
category: pipelines
---

With Agents you can build custom end-to-end machine learning pipelines directly
in your projects.

## Creating an Agent

Running an agent on your own hardware allows users to configure more processing
power or memory to run larger jobs. Agents can be hosted physically, virtually,
in a container, on-premises, or in a cloud.

You can add agents at the organization or team levels, where they can be used to
process jobs for multiple projects, or you can add a agent to a specific project
only.

The configured agent machine connects to DataTorch API using the using the
Python Library. The agent runner is open source, which means you can contribute
and file issues in the repository.

<alert type="warning">
   An agent is automatically removed from DataTorch if it has not connected for
   more than 30 days.
</alert>

### Installing Agent on a Machine

1. **Install the DataTorch CLI.** You must be running python 3.6+.

   ```sh
   pip install datatorch[agent]
   ```

   You should now be able to access the CLI tool by running:

   ```sh
   datatorch --help
   ```

   Checkout the [Python SDK/CLI section](/python/introduction) for more information.

2. **Login to the CLI tool.** Run the command below to login and link your
   account to your machine.

   ```sh
   datatorch login
   ```

   <alert>
      If you are running a custom instance of DataTorch you will need to specific a
      `--host` parameter. General, the value will be
      `https://your-instance.com/api`.
   </alert>

3. **Create an agent.** Run the command below to create the agent.

   ```bash
   datatorch agent create
   ```

4. **Run the agent.** Run the command below to start the agent.

   ```bash
   datatorch agent start
   ```

The agent will consume the terminal with logs and output information. You
will now be able to view the agent in DataTorch. Exiting this terminal or
pressing `ctrl+c` will stop the agent.

5.**View the agent in DataTorch.** You can navigate to
[/agents](https://datatorch.io/agents) where a list of all your agents will
be available to you. You may need to give a bit of time for the information
about the agents performance to populate.

### Adding Agent to Project

1. On DataTorch, navigate to the main page of the project.
2. On the left sidebar click the **Settings** tab.
3. Inside the second sidebar click **Agents**.
4. Now in the title click the button **Manage Agents**.
5. Selected the agents you would like to add the project and click **Save**.
