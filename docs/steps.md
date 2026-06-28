
# Connect to ec2 with ssh
ssh -i "./root_key_test01.pem" ubuntu@13.232.241.170 - EC2 - 1

ssh -i "./root_key_test01.pem" ubuntu@13.204.83.155 - EC2 - 2

# Install Docker - with docker.sh

# Remove old versions if installed
sudo apt remove docker docker-engine docker.io containerd runc

# Update packages
sudo apt update

# Install dependencies
sudo apt install -y ca-certificates curl gnupg

# Create Docker keyring directory
sudo install -m 0755 -d /etc/apt/keyrings

# Add Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
sudo apt update

# Install Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## 2. Enable Docker Service

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Check status:

```bash
sudo systemctl status docker
```

You should see:

```text
Active: active (running)
```

---

## 3. Allow Current User to Use Docker

Without this, you'll need `sudo` every time.

```bash
sudo usermod -aG docker $USER
```

Apply the change:

```bash
newgrp docker
```

## 4. Setup App Directory

```bash
sudo mkdir -p /opt/apps
sudo chown ubuntu:ubuntu /opt/apps
cd /opt/apps
git clone https://github.com/Shashankd48/hero-vired-assignment-04.git travel-memory
cd travel-memory
create .env file - backend
create .env file - frontend
```

## 5. Build App

```bash
docker compose up -d --build
```


## Repeated all above steps for the 2nd EC2 instance

From Step 1 to Step 5

## Setting of AWS ALB