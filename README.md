# Chat Server

Another LLM chatbot web application! This application uses [Open WebUI](https://openwebui.com/) as a frontend and an
Express server to forward requests to [Replicate](https://replicate.com/). Replicate hosts machine learning models and
exposes them through an API.

## Requirements

## Deployment

If you haven't already, install [Ansible](https://docs.ansible.com/ansible/latest/index.html) on your local machine. Next, create an inventory file, `inventory.ini`. It should look like:

```ini
   [chat]
   <ip_address>

   [chat:vars]
   ansible_user=<user>
   ansible_ssh_private_key_file=<private_key>
   server_domain=<server_domain>
```

> **Note**: the deployment assumes you already have a VPS set up with a user NOT in root. Running everything in root
> creates a lot of security issues. Please don't do this!

Then, run the Ansible playbook to set up the server:

```zsh
ansible-playbook -i inventory.ini setup-chat.playbook.yaml
```

If you would like to skip any of the steps (e.g. setup), you can run specific tasks with the `tags` command like so:

```zsh
ansible-playbook -i inventory.ini setup-chat.playbook.yaml  --tags frontend
```

### OpenWeb UI

Once the playbook has been run, you can setup OpenWeb UI following these steps:

1. Go to `https://<server_domain>` and create a new admin account
2. Disable new account creation in the `Admin Panel` settings
3. Add new API Keys for the LLM models you'd like
