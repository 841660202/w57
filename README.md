* 项目更换版本
* [添加多渠道打包](https://github.com/841660202/w57/blob/master/%E5%A4%9A%E6%B8%A0%E9%81%93%E6%89%93%E5%8C%85.md)
* 热推送（假设你已经有账号并且登陆）

```
code-push app add w57-android android react-native
```

| Name       | Deployment Key  |
| --------   | -------- |
| Production | BY0qqc7pa631n_j4bFaCuVP_At44e5678dc0-13bd-4de0-8573-dd6806745d95 |
| Staging    | UGyy5n6yjCKUyPVrm7vD91zFi5GAe5678dc0-13bd-4de0-8573-dd6806745d95 |

```
    code-push app add w57-ios ios react-native
```


| Name       | Deployment Key  |
| --------   | -------- |
| Production | lTA3fljYpOkIosKk6LDqqkdJh3hVe5678dc0-13bd-4de0-8573-dd6806745d95  |
| Staging    | tNhHdxP-xGy_C8DmQJGJWswa80gqe5678dc0-13bd-4de0-8573-dd6806745d95 |

```
打包
react-native bundle --platform android --entry-file index.js --bundle-output ./bundles/index.android.bundle --dev false

发布
code-push release-react w57-android "android" --d "Staging" --t 1.0  --des "测试"
发布
code-push release-react w57-android "android" --d "Production" --t 1.0  --des "测试"

查看发布历史
code-push deployment history w57-android Production
查看key
code-push deployment ls w57-android -k

```
