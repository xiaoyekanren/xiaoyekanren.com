# 

## 启动

``` shell
# 启用 pnpm
corepack enable

# 启动开发服务器
pnpm docs:dev 

# 构建项目并输出
pnpm install
pnpm docs:build 

# 清除缓存并启动开发服务器
pnpm docs:clean-dev 

```

## 同步到服务器
``` shell

## 上传程序到服务器
使用rsync比scp要快很多很多。
``` shell
rsync -avz \
    --dry-run \
    --delete \
    --exclude-from=.gitignore \
    /Users/zzm/Src/Nodejs/new_site/ \
    root@xiaoyekanren.com:/opt/xiaoyekanren.com
```
> --dry-run, 测试模式  
> --delete，如果本地没有，但是对端（服务器）有，则删除   
> --exclude rest.log，保留服务器的log文件   

``` 
