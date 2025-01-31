# 명령줄 인터페이스 가이드라인

전통적인 UNIX 원칙을 현대에 맞게 업데이트하여 더 나은 명령줄 프로그램을 작성하는 데 도움을 주는 오픈소스 가이드입니다.

이 저장소는 가이드의 소스코드 입니다. 빌드된 웹사이트는 [clig.kr](https://clig.kr/)에서 읽으실 수 있습니다..

CLI 설계나 가이드에 관련하여 논의하고 싶다면 [디스코드에 참가해주세요.](https://discord.gg/EbAW5rUCkE)

혹은 번역에 관하여 논의하고 싶다면 [GitHub 논의](https://github.com/moreal/cli-guidelines-kr/discussions)에 의견을 남겨주세요.

## Contributing

가이드의 내용은 마크다운 하나에 작성되어 있습니다, [content/_index.md](content/_index.md).
웹사이트는 [Hugo](https://gohugo.io/)를 활용하여 빌드됩니다. 현재 사용하고 있는 버전은 0.142.0 입니다.

```
$ brew install hugo
$ cd <path>/<to>/cli-guidelines/
$ hugo server
```

<!-- TODO: add contact info (how to reach the CLIG creators with questions) -->

아래 번역가이드에 적은대로 대조를 쉽게 하기 위해 

### 번역 규칙

[moreal](https://github.com/moreal)이 번역하면서 이러면 좋겠다 싶었던 번역 규칙을 남깁니다.

- 만약 [cli-guidelines/cli-guidelines]의 내용이 변경된다면 `extra/original.md` 파일을 업스트림 저장소의 최신 `content/_index.md` 파일로 업데이트합니다.
- 번역본과 원본의 대조를 쉽게 하기 위해 `content/_index.md` 에는 추가적인 수정을 하지 않습니다. `content/_index.md` 파일과 `extra/original.md` 파일의 내용이 줄 별로 1대1 대응하도록 합니다.
  - 추가적으로 내용을 넣어야 하는 내용이 있다면 빌드 타임에 CLI 도구를 통해 추가합니다. 예를 들어 clig.kr은 Cloudflare Pages 빌드 과정 중 아래와 같은 명령어로 `extra/credit.md` 를 `foreword` 섹션 상단에 삽입합니다.
    ```
    perl -0777 -pi -e 'BEGIN { local $/; $credit = `cat extra/credit.md`; chomp($credit); } s/\n\n## 서문 {#foreword}/\n$credit\n\n\n## 서문 {#foreword}/g' content/_index.md
    ```

## License

이 작업물은 [cli-guidelines/cli-guidelines] 를 번역한 것입니다. 원본의 저작권은 원작자에게 있습니다. [clig.dev의 라이센스](https://github.com/cli-guidelines/cli-guidelines/blob/35ab5d1ecadeca365fdf59d0e9ea8b740e5e06fb/LICENSE)에 따라 동일하게 [저작자표시-동일조건변경허락 4.0 국제](https://creativecommons.org/licenses/by-sa/4.0/deed.ko)를 적용합니다.


[cli-guidelines/cli-guidelines]: https://github.com/cli-guidelines/cli-guidelines
