# ベースイメージ
FROM ubuntu:22.04
# タイムゾーン・ロケール設定
ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get install -y \
    curl \
    git \
    gnupg \
    ca-certificates \
    sudo \
    vim \
    && rm -rf /var/lib/apt/lists/*
# Node.js（LTS）のインストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g vite
# 作業ディレクトリ
WORKDIR /app
# ポート開放（Viteのデフォルトポート）
EXPOSE 5173
CMD ["bash"]
