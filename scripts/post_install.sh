#!/bin/bash
echo "Setting up riderverse build..."
chown -R ec2-user:ec2-user /var/www/riderverse
chmod -R 755 /var/www/riderverse

# Optional: restart nginx if you’re serving via nginx
if systemctl list-units --type=service | grep -q nginx; then
  echo "Restarting nginx..."
  systemctl restart nginx
fi
