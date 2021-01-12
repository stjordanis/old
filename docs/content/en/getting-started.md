---
title: Quick Start
description: Get started quickly!
position: 2
category: ''
---

<img src="/rocket.png" />

<alert>If you'd like to watch a video tutorial, check out our getting started video [here](https://www.youtube.com/watch?v=kM4O1HoyPDc)!</alert>

In this section we will quickly get you up and annotating data. We will walk through through the following steps:

- Creating a new project
- Uploading files to storage
- Annotating files
- Exporting the results

If you haven't signed up yet, you can do so on our [registration page](https://datatorch.io/auth?tab=register).

## Creating a Project

Once you have registered an account, you can create a project by clicking the
plus icon ( **+** ) found on the navigation bar. Options like ownership (via yourself or an organization) or visibility can be set here.

<alert>The project slug can be customized independently of the project name, which will determine the project URL at `https://datatorch.io/kgserrano/[PROJECT_SLUG_NAME]`.</alert>

<figure>
  <img src="/figures/getting-started/create-project.png" max-width="450px">
  <figcaption>Initial form for creating a project</figcaption>
</figure>

## Uploading your Data

Before you are able to upload files, you first must create a dataset. You can
think of datasets as folders; they are intend to help manage large amounts of files.
Futhermore, they are useful for creating export schemas (more on this
later).

Create your first dataset by navigating to the `Datasets` section of the sidebar and clicking on the green plus icon ( **+** ).

Next, we must configure where the files will be stored.

<alert>

`datatorch.io` users already have access to a storage called `DataTorch Storage` for ease of use. However, we recommend production-level
datasets be stored in a dedicated storage as detailed below.

</alert>

If a default storage mount has been configured for your instance,
one will be added alongside creation
of your project. Otherwise, you must configure a storage mount.

Currently, DataTorch supports:

- Local
- AWS S3 Buckets
- Azure Blobs
- Google Cloud Buckets

<alert type="warning">

If you would like to request additional support for other storage options,
please create an issue on our
[node-storage repository](https://github.com/datatorch/node-storage).

</alert>

### Creating a Storage Mount

To mount a custom storage, go to your project's `Files` tab. From
here, click on the green plus icon ( **+** ). Fill in the correct
information to connect to your storage mount.

Once you have successfully created a storage mount, the option to upload files
to a dataset will become available.

<alert type="warning">

Currently the webclient is limited to a
maximum of 50 files with a 50 MB size for each file.

</alert>

### Assigning files to a dataset

Now that your files can now be accessed by Datatorch, now we need to
assign them to a dataset, which will help us organize our files
and exports.

From the storage interface of the files tab, use the checkboxes to select
the files that you want to include in the dataset. Proceed to click on the
teal button next to the delete button above the files and select the appropriate
dataset from the dropdown.

<figure>
  <img src="/figures/getting-started/dataset-assign.png" max-width="450px">
  <figcaption>Assign those files!</figcaption>
</figure>

## Annotating Files

### Creating a Label

Before we start annotating, we need to set up our labeling. We can
create our first labels in the Labels section of the sidebar.

<figure>
  <img src="/figures/getting-started/test-label.png" max-width="450px">
  <figcaption>Form for creating a label.</figcaption>
</figure>

Here you can set the label's display name, a custom ID for the export if necessary,
colors, and an optional parent label. Once you've created your necessary labels, it's
time to start annotating data!

### Using the Annotator

Finally, we can start annotating. From the datasets tab, navigate to the dataset with
your assigned files and select the first file.

## Creating Exports

Exports allow you download your annotations in order to begin training your
machine learning models. DataTorch allows you to specify exactly which
properties of your dataset you would like to export.

### Sharing your Project

You can add users to your project using the Members tab.

<figure>
  <img src="/figures/getting-started/invite-members.png" max-width="320px">
  <figcaption>Form used to invite members to a project</figcaption>
</figure>

Default classes are created for each of your projects. If you would like to
learn more about creating custom roles, checkout [User
Roles](/projects.html#user-roles).
