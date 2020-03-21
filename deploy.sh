#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


pwd

git add .

git commit -m "自动化部署，本次提交无关键信息"

git push

cd -