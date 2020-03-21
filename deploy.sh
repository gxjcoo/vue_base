#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


pwd

git add .

git commit -m "添加webpackChunkName"

git push

cd -