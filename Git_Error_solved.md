# **깃 오류 해결**
### fatal: The current branch master has no upstream branch.To push the current branch and set the remote as upstream, use git push --set-upstream origin master
```git
Doldari Teenager@Doldari-Teenager MINGW64 ~/Downloads/Javascript_Study/Module (master)
$ git commit -m "http.js,respond.js,request.js 생성"
[master (root-commit) f33c0e2] http.js,respond.js,request.js 생성
 3 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Module/http.js
 create mode 100644 Module/request.js
 create mode 100644 Module/respond.js

Doldari Teenager@Doldari-Teenager MINGW64 ~/Downloads/Javascript_Study/Module (master)
$ git push origin
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

```
**해결책**  
-출처 : 헬창코딩 -

깃을 처음 설치하고 로컬 저장소와 원격 저장소를 만들어서 푸시 테스트할 때 메시지를 볼 수 있습니다.


    git push --set-upstream origin master
 

오류의 원인은 처음 만들고 원격 저장소에 대한 기본 브랜치 설정을 안 해줬기 때문입니다. 

이런 오류는 처음 브랜치 설정만 해주면 간단하게 해결이 가능합니다.

 

$ git push --set-upstream origin master

해결 안됐는데, 일단 Javascript_Study에 원격 저장소 지정 후에 다시 하니까 된다.  
그런데, 깃허브 가보니 Module폴더만 있고 Javascript_Study에 있는 다른 폴더들은 나오지 않는다.