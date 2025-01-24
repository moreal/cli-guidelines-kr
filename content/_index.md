# 명령줄 인터페이스 가이드라인 {#command-line-interface-guidelines}

전통적인 UNIX 원칙을 현대에 맞게 업데이트하여 더 나은 명령줄 프로그램을 작성하는 데 도움을 주는 [오픈소스](https://github.com/cli-guidelines/cli-guidelines) 가이드입니다.

## 작성자들 {#authors}

**Aanand Prasad** \
Squarespace 엔지니어, Docker Compose 공동 제작자. \
[@aanandprasad](https://twitter.com/aanandprasad)

**Ben Firshman** \
[Replicate](https://replicate.ai/) 공동 제작자, Docker Compose 공동 제작자. \
[@bfirsh](https://twitter.com/bfirsh)

**Carl Tashian** \
[Smallstep](https://smallstep.com/) Developer Advocate, Zipcar의 첫 번째 엔지니어, Trove 공동 설립자. \
[tashian.com](https://tashian.com/) [@tashian](https://twitter.com/tashian)

**Eva Parish** \
Squarespace 테크니컬 라이터, O'Reilly 기고자.\
[evaparish.com](https://evaparish.com/) [@evpari](https://twitter.com/evpari)

[Mark Hurrell](https://mhurrell.co.uk/)이 디자인 해주셨습니다. 초기 기여를 해준 Andreas Jansson과 초안을 검토해 준 Andrew Reitz, Ashley Williams, Brendan Falk, Chester Ramey, Dj Walker-Morgan, Jacob Maine, James Coglan, Michael Dwan, Steve Klabnik 에게 감사드립니다.

<iframe class="github-button" src="https://ghbtns.com/github-btn.html?user=cli-guidelines&repo=cli-guidelines&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

가이드나 CLI 디자인에 대해 논의하고 싶다면 [Discord에 참여](https://discord.gg/EbAW5rUCkE)해 주세요.


## 서문 {#foreword}

1980년대에는 개인용 컴퓨터로 작업을 하려면 `C:\>` 또는 `~$`가 나타났을 때 무엇을 입력해야 하는지 알아야 했습니다.
도움말은 두꺼운 스프링 제본 매뉴얼 형태로 제공되었습니다.
오류 메시지는 불투명했습니다.
Stack Overflow 같은 구원자도 없었습니다.
하지만 운 좋게 인터넷에 접속할 수 있었다면, 당신만큼이나 좌절감을 느끼는 다른 사람들이 모여 있는 초기 인터넷 커뮤니티인 Usenet에서 도움을 받을 수 있었습니다.
그들은 문제 해결을 도와주거나, 최소한 정신적 지지와 동료애를 제공해줄 수 있었습니다.

40년이 지난 지금, 컴퓨터는 모든 사람이 훨씬 더 쉽게 접근할 수 있게 되었지만, 그 대가로 최종 사용자의 저수준 제어 기능은 희생되었습니다.
많은 기기에서는 폐쇄된 생태계와 앱스토어라는 기업의 이해관계에 반하기 때문에 커맨드라인 접근이 전혀 불가능합니다.

오늘날 대부분의 사람들은 커맨드라인이 무엇인지조차 모르며, 이를 사용해야 하는 이유는 더더욱 모릅니다.
컴퓨터 공학의 선구자인 Alan Kay가 [2017년 인터뷰](https://www.fastcompany.com/40435064/what-alan-kay-thinks-about-the-iphone-and-technology-now)에서 말했듯이, "사람들은 컴퓨팅이 무엇인지 이해하지 못하기 때문에 아이폰만으로도 충분하다고 생각하는데, 이는 '기타 히어로'가 진짜 기타와 같다고 생각하는 것만큼이나 나쁜 착각입니다."

Kay가 말하는 "진짜 기타"는 (엄밀히 말하자면) CLI는 아닙니다.
그는 CLI의 파워를 제공하고 텍스트 파일로 소프트웨어를 작성하는 것을 넘어서는 컴퓨터 프로그래밍 방식에 대해 이야기하고 있었습니다.
Kay의 추종자들 사이에서는 우리가 수십 년 동안 머물러 있던 텍스트 기반의 지역 최대값에서 벗어나야 한다는 믿음이 있습니다. 우리가 컴퓨터를 매우 다르게 프로그래밍하는 미래를 상상하는 것은 흥미진진합니다.

우리가 컴퓨터를 매우 다르게 프로그래밍하는 미래를 상상하는 것은 흥미진진합니다.
오늘날에도 스프레드시트는 단연코 가장 인기 있는 프로그래밍 언어이며, 유능한 프로그래머에 대한 치열한 수요를 대체하려는 노코드 운동이 빠르게 성장하고 있습니다.

하지만 수십 년 된 낡은 제약과 설명할 수 없는 특이점에도 불구하고, 커맨드라인은 여전히 컴퓨터에서 가장 _다재다능한_ 영역입니다.
커맨드라인은 GUI가 제공할 수 없는 수준의 정교함과 깊이로 커튼을 젖히고 실제로 무슨 일이 일어나고 있는지 보며, 기계와 창의적으로 상호작용할 수 있게 해줍니다.
커맨드라인은 배우고자 하는 사람이라면 누구나 거의 모든 노트북에서 사용할 수 있습니다.
대화식으로 사용할 수도 있고 자동화할 수도 있습니다.
그리고 시스템의 다른 부분만큼 빠르게 변하지 않습니다.
이러한 안정성에는 창의적 가치가 있습니다.

따라서 우리가 아직 커맨드라인을 가지고 있는 동안, 그 유용성과 접근성을 최대화하도록 노력해야 합니다.

초창기 이후로 컴퓨터를 프로그래밍하는 방식이 많이 변했습니다.
과거의 커맨드라인은 _기계 우선_ 이었습니다, 스크립팅 플랫폼 위에 있는 REPL에 불과했죠.
하지만 범용 인터프리터 언어가 번성하면서 셸 스크립트의 역할은 축소되었습니다.
오늘날의 커맨드라인은 _사람 우선_ 입니다. 모든 종류의 도구, 시스템, 플랫폼에 대한 액세스를 제공하는 텍스트 기반 UI입니다.
과거에는 에디터가 터미널 안에 있었지만, 오늘날에는 터미널이 에디터의 기능인 경우가 많습니다. 
그리고 `git`과 같은 멀티툴 명령어가 급증했습니다.
명령어 안의 명령어, 그리고 원자적 기능이 아닌 전체 워크플로우를 수행하는 고수준 명령어들이 있습니다.

전통적인 UNIX 철학에서 영감을 받고, 더 즐겁고 접근하기 쉬운 CLI 환경을 장려하는 데 관심을 두며, 프로그래머로서의 경험을 바탕으로, 우리는 커맨드라인 프로그램을 만드는 모범 사례와 설계 원칙을 재검토할 때가 되었다고 판단했습니다.

커맨드라인이여 영원하라!

## 소개 {#introduction}

이 문서는 고수준의 설계 철학과 구체적인 가이드라인을 모두 다룹니다.
우리의 실무자로서의 철학은 너무 많은 철학을 논하지 않는 것이기 때문에, 가이드라인에 더 중점을 두고 있습니다.
우리는 예시를 통한 학습을 믿기 때문에, 많은 예시를 제공했습니다.

이 가이드는 emacs나 vim과 같은 전체 화면 터미널 프로그램은 다루지 않습니다.
전체 화면 프로그램은 틈새 프로젝트입니다. 우리 중 극소수만이 이를 설계할 기회를 갖게 될 것입니다.

이 가이드는 또한 프로그래밍 언어와 도구에 대해 일반적으로 중립적입니다.

이 가이드는 누구를 위한 것인가요?
- CLI 프로그램을 만들고 있고 UI 설계를 위한 원칙과 구체적인 모범 사례를 찾고 있다면, 이 가이드는 당신을 위한 것입니다.
- 당신이 전문 "CLI UI 디자이너"라면, 그건 놀랍습니다—우리는 당신에게서 배우고 싶습니다.
- 40년간의 CLI 설계 관습에 위배되는 다양한 명백한 실수를 피하고 싶다면, 이 가이드는 당신을 위한 것입니다.
- 당신의 프로그램의 좋은 설계와 도움이 되는 도움말로 사람들을 기쁘게 하고 싶다면, 이 가이드는 확실히 당신을 위한 것입니다.
- GUI 프로그램을 만들고 있다면, 이 가이드는 당신을 위한 것이 아닙니다. 하지만 읽기로 결정한다면 몇 가지 GUI 안티패턴을 배울 수 있을 것입니다.
- 만약 당신이 전체 화면 CLI 버전의 마인크래프트를 개발하고 계신다면, 이 가이드는 필요하지 않습니다.
  (하지만 정말 보고 싶네요!)

## 철학 {#philosophy}

다음은 우리가 생각하는 좋은 CLI 설계의 기본 원칙들입니다.

### Human-first design {#human-first-design}

전통적으로 UNIX 명령어들은 주로 다른 프로그램에 의해 사용될 것이라는 가정하에 작성되었습니다. 
이들은 그래픽 애플리케이션보다는 프로그래밍 언어의 함수와 더 많은 공통점을 가지고 있었습니다.

오늘날에는 많은 CLI 프로그램들이 주로(또는 전적으로) 사람들에 의해 사용됨에도 불구하고, 그들의 상호작용 설계는 여전히 과거의 짐을 지고 있습니다.
이제 이러한 짐을 벗어던질 때입니다: 명령어가 주로 사람들에 의해 사용될 것이라면, 사람을 우선으로 설계되어야 합니다.

### Simple parts that work&nbsp;together {#simple-parts-that-work-together}

[원래의 UNIX 철학](https://en.wikipedia.org/wiki/Unix_philosophy)의 핵심 원칙은 깔끔한 인터페이스를 가진 작고 단순한 프로그램들을 조합하여 더 큰 시스템을 구축할 수 있다는 아이디어입니다.
프로그램에 더 많은 기능을 욱여넣는 대신, 필요에 따라 재조합할 수 있을 만큼 모듈화된 프로그램을 만듭니다.

예전에는 파이프와 셸 스크립트가 프로그램들을 함께 구성하는 과정에서 중요한 역할을 했습니다.
범용 인터프리터 언어의 부상으로 그들의 역할이 줄어들었을 수 있지만, 확실히 사라지지는 않았습니다.
더욱이 CI/CD, 오케스트레이션, 구성 관리 형태의 대규모 자동화가 번성했습니다.
프로그램을 조합 가능하게 만드는 것은 여전히 중요합니다.

다행히도, 이러한 목적을 위해 설계된 UNIX 환경의 오랜 관례들은 오늘날에도 여전히 우리에게 도움이 됩니다.
표준 입력/출력/오류, 시그널, 종료 코드 및 기타 메커니즘은 서로 다른 프로그램들이 잘 맞물려 돌아가도록 보장합니다.
단순한 라인 기반 텍스트는 명령어들 사이에서 쉽게 파이프로 연결할 수 있습니다.
훨씬 최근에 발명된 JSON은 우리가 필요로 할 때 더 많은 구조를 제공하며, 커맨드라인 도구를 웹과 더 쉽게 통합할 수 있게 해줍니다.

어떤 소프트웨어를 만들든, 사람들이 당신이 예상하지 못한 방식으로 사용할 것이라는 점은 확실합니다.
당신의 소프트웨어는 더 큰 시스템의 일부가 _될 것_입니다—당신이 선택할 수 있는 것은 그것이 잘 작동하는 부품이 될 것인지 아닌지 뿐입니다.

가장 중요한 것은, 조합 가능성을 위한 설계가 사람 우선 설계와 대립할 필요가 없다는 점입니다.
이 문서의 많은 조언들은 두 가지를 모두 달성하는 방법에 관한 것입니다.

### Consistency across programs {#consistency-across-programs}

터미널의 관례들은 우리 손가락에 깊이 배어 있습니다.
우리는 커맨드라인 문법, 플래그, 환경 변수 등을 배우는 데 초기 비용을 지불해야 했지만, 프로그램들이 일관성을 유지하는 한 장기적인 효율성으로 보상받습니다.

가능한 경우, CLI는 이미 존재하는 패턴을 따라야 합니다.
그것이 CLI를 직관적이고 예측 가능하게 만드는 것이며, 사용자들을 효율적으로 만드는 것입니다.

하지만, 때로는 일관성이 사용 편의성과 충돌할 수 있습니다.
예를 들어, 오래된 많은 UNIX 명령어들은 기본적으로 많은 정보를 출력하지 않는데, 이는 커맨드라인에 덜 익숙한 사람들에게 혼란이나 걱정을 일으킬 수 있습니다.

관례를 따르는 것이 프로그램의 사용성을 저해할 때는 그것을 깨뜨릴 때일 수 있습니다—하지만 그러한 결정은 신중하게 이루어져야 합니다.

### Saying (just) enough {#saying-just-enough}

터미널은 순수한 정보의 세계입니다.
정보가 인터페이스라고 주장할 수 있으며—다른 모든 인터페이스와 마찬가지로, 흔히 너무 많거나 너무 적은 경우가 있습니다.

명령어가 몇 분 동안 멈춰있어서 사용자가 고장났는지 궁금해하기 시작할 때, 그 명령어는 너무 적게 말하고 있는 것입니다.
명령어가 페이지 수십 장 분량의 디버깅 출력을 쏟아내어 진정으로 중요한 것을 잡다한 잔해의 바다에 빠뜨릴 때, 그 명령어는 너무 많이 말하고 있는 것입니다.
결과는 동일합니다: 명확성의 부족으로 사용자를 혼란스럽고 짜증나게 만듭니다.

이러한 균형을 맞추기는 매우 어려울 수 있지만, 소프트웨어가 사용자에게 힘을 실어주고 봉사하려면 절대적으로 중요합니다.

### Ease of discovery {#ease-of-discovery}

기능을 발견하기 쉽게 만드는 데 있어서는 GUI가 우위를 점하고 있습니다.
할 수 있는 모든 것이 화면에 펼쳐져 있어서, 아무것도 배우지 않고도 필요한 것을 찾을 수 있고, 심지어 가능한지도 몰랐던 것들을 발견할 수도 있습니다.

커맨드라인 인터페이스는 이와 반대라고 가정됩니다—모든 것을 어떻게 하는지 기억해야 한다고요.
1987년에 발표된 원래의 [Macintosh 휴먼 인터페이스 가이드라인](https://archive.org/details/applehumaninterf00appl)은 마치 둘 중 하나만 선택할 수 있는 것처럼 "기억하고 입력하는 대신 보고 가리키기"를 권장합니다.

이러한 것들이 서로 배타적일 필요는 없습니다.
커맨드라인 사용의 효율성은 명령어를 기억하는 데서 오지만, 명령어가 학습과 기억을 도와줄 수 없을 이유는 없습니다.

발견하기 쉬운 CLI는 포괄적인 도움말 텍스트를 가지고 있고, 많은 예시를 제공하며, 다음에 실행할 명령어를 제안하고, 오류가 있을 때 무엇을 해야 할지 제안합니다.
파워 유저들을 위해서도 CLI를 배우고 사용하기 쉽게 만들기 위해 GUI에서 가져올 수 있는 아이디어가 많이 있습니다.

_인용: 일상적인 것들의 디자인(Don Norman), Macintosh 휴먼 인터페이스 가이드라인_

### Conversation as the&nbsp;norm {#conversation-as-the-norm}

GUI 디자인은, 특히 초기에는 _은유_를 많이 사용했습니다: 데스크톱, 파일, 폴더, 휴지통 등이요.
컴퓨터가 여전히 정당성을 확립하려고 노력하고 있었기 때문에 이는 매우 합리적이었습니다.
은유의 쉬운 구현은 GUI가 CLI에 비해 가진 큰 장점 중 하나였습니다.
하지만 아이러니하게도, CLI는 줄곧 우연한 은유를 구현해왔습니다: 바로 대화입니다.

가장 단순한 명령어를 넘어서면, 프로그램을 실행하는 것은 보통 한 번 이상의 호출을 포함합니다.
보통 이는 처음에 바로 제대로 하기가 어렵기 때문입니다: 사용자는 명령어를 입력하고, 오류를 받고, 명령어를 변경하고, 다른 오류를 받는 등의 과정을 거쳐 마침내 작동하게 됩니다.
반복된 실패를 통한 이러한 학습 방식은 사용자가 프로그램과 나누는 대화와 같습니다.

시행착오가 대화형 상호작용의 유일한 유형은 아닙니다.
다른 유형들도 있습니다:

- 도구를 설정하기 위해 하나의 명령어를 실행한 다음, 실제로 사용하기 위해 실행해야 할 명령어들을 배우는 방식.
- 작업을 설정하기 위해 여러 명령어를 실행하고, 마지막으로 실행 명령어를 입력하는 방식(예: 여러 번의 `git add` 후 `git commit` 실행).
- 시스템을 탐색하는 방식—예를 들어, 디렉토리 구조를 파악하기 위해 `cd`와 `ls`를 많이 사용하거나, 파일의 이력을 탐색하기 위해 `git log`와 `git show`를 사용하는 방식.
- 복잡한 작업을 실제로 실행하기 전에 시험 실행을 해보는 방식.

명령줄 상호작용의 대화적 특성을 인정한다는 것은 이러한 특성에 맞는 관련 기술들을 설계에 적용할 수 있다는 것을 의미합니다.
사용자의 입력이 유효하지 않을 때 가능한 수정 사항을 제안할 수 있고, 사용자가 다단계 프로세스를 진행할 때 중간 상태를 명확하게 보여줄 수 있으며, 위험한 작업을 수행하기 전에 모든 것이 정상인지 확인해줄 수 있습니다.

의도했든 그렇지 않든 사용자는 당신의 소프트웨어와 대화하고 있습니다.
최악의 경우, 사용자를 바보처럼 느끼게 하고 분노하게 만드는 적대적인 대화가 될 수 있습니다.
최선의 경우, 새로운 지식과 성취감을 가지고 빠르게 목표를 달성하게 하는 즐거운 교류가 될 수 있습니다.

_추가 읽을거리: [The Anti-Mac User Interface (Don Gentner and Jakob Nielsen)](https://www.nngroup.com/articles/anti-mac-interface/)_

### 견고성 {#robustness-principle}

견고성은 객관적이면서도 주관적인 특성입니다.
물론 소프트웨어는 견고해야 합니다: 예상치 못한 입력을 우아하게 처리해야 하고, 가능한 경우 작업은 멱등성을 가져야 하며, 기타 등등.
하지만 견고하다고 느껴지기도 해야 합니다.

당신의 소프트웨어가 부서질 것 같지 않다고 느끼게 하고 싶을 것입니다.
당신은 그것이 허약한 플라스틱 "소프트 스위치"가 아닌, 큰 기계장치처럼 즉각적이고 반응이 좋다고 느끼게 하고 싶을 것입니다.

주관적인 견고성을 위해서는 세부사항에 주의를 기울이고 잘못될 수 있는 것들에 대해 깊이 생각해야 합니다.
사용자에게 진행 상황을 계속 알리고, 일반적인 오류의 의미를 설명하고, 무서워 보이는 스택 트레이스를 출력하지 않는 등 작은 것들이 많이 있습니다.

일반적으로, 견고성은 단순함을 유지하는 것에서도 올 수 있습니다.
많은 특수 케이스와 복잡한 코드는 프로그램을 취약하게 만드는 경향이 있습니다.

### 공감 {#empathy}

명령줄 도구는 프로그래머의 창의적인 도구이므로, 사용하기 즐거워야 합니다.
이는 비디오 게임으로 만들거나 많은 이모지를 사용한다는 의미는 아닙니다(이모지 자체가 잘못된 것은 아니지만요 😉).
이는 사용자에게 당신이 그들의 편이고, 그들이 성공하기를 바라며, 그들의 문제와 해결 방법에 대해 신중히 생각했다는 느낌을 주는 것을 의미합니다.

우리의 조언을 따르면 어느 정도는 도움이 되겠지만, 이러한 느낌을 보장하는 행동 목록은 없습니다.
사용자를 기쁘게 하는 것은 모든 순간에 그들의 기대를 뛰어넘는 것을 의미하며, 이는 공감에서 시작됩니다.

### 혼돈 {#chaos}

터미널의 세계는 혼돈스럽습니다.
일관성 없는 것들이 도처에 있어서, 우리를 늦추고 우리 자신을 의심하게 만듭니다.

하지만 이러한 혼돈이 힘의 원천이었다는 것은 부정할 수 없습니다.
일반적으로 UNIX에서 유래한 컴퓨팅 환경처럼, 터미널은 당신이 만들 수 있는 것에 대해 매우 적은 제약만을 둡니다.
그러한 공간에서, 모든 종류의 발명이 꽃피었습니다.

이 문서가 수십 년간의 명령줄 전통에 위배되는 조언과 함께, 기존 패턴을 따르라고 간청하는 것은 아이러니합니다.
우리도 다른 누구와 마찬가지로 규칙을 깨는 데 있어 죄가 있습니다.

당신도 규칙을 깨야 할 때가 올 수 있습니다.
목적의 의도와 명확성을 가지고 그렇게 하세요.

> "생산성이나 사용자 만족도에 명백히 해롭다고 입증된 경우에는 표준을 버리세요." — Jef Raskin, [The Humane Interface](https://en.wikipedia.org/wiki/The_Humane_Interface)

## 가이드라인 {#guidelines}

이것은 당신의 명령줄 프로그램을 더 좋게 만들기 위해 할 수 있는 구체적인 것들의 모음입니다.

첫 번째 섹션은 따라야 할 필수적인 것들을 담고 있습니다.
이것들을 잘못하면, 당신의 프로그램은 사용하기 어렵거나 나쁜 CLI 시민이 될 것입니다.

나머지는 있으면 좋은 것들입니다.
이러한 것들을 추가할 시간과 에너지가 있다면, 당신의 프로그램은 평균적인 프로그램보다 훨씬 더 좋을 것입니다.

이 아이디어는, 만약 당신이 프로그램의 설계에 대해 너무 깊이 생각하고 싶지 않다면, 그럴 필요가 없다는 것입니다: 이 규칙들을 따르기만 하면 당신의 프로그램은 아마도 좋을 것입니다.
반면에, 만약 당신이 생각해보고 어떤 규칙이 당신의 프로그램에 맞지 않다고 판단했다면, 그것도 괜찮습니다.
(임의의 규칙을 따르지 않았다고 당신의 프로그램을 거부할 중앙 권한은 없습니다.)

또한—이 규칙들은 돌에 새겨진 것이 아닙니다.
만약 당신이 타당한 이유로 일반적인 규칙에 동의하지 않는다면, [변경을 제안](https://github.com/cli-guidelines/cli-guidelines)해 주시기를 바랍니다.

### 기본 사항 {#the-basics}

따라야 할 몇 가지 기본 규칙이 있습니다.
이것들을 잘못하면, 당신의 프로그램은 사용하기 매우 어렵거나 완전히 망가질 것입니다.

**가능한 경우 명령줄 인자 파싱 라이브러리를 사용하세요.**
당신이 사용하는 언어에 내장된 것이나 좋은 서드파티 라이브러리를 사용하세요.
이들은 보통 인자, 플래그 파싱, 도움말 텍스트, 심지어 철자 제안까지도 합리적인 방식으로 처리합니다.

다음은 우리가 좋아하는 몇 가지입니다:
* 멀티플랫폼: [docopt](http://docopt.org)
* Bash: [argbash](https://argbash.dev)
* Go: [Cobra](https://github.com/spf13/cobra), [cli](https://github.com/urfave/cli)
* Haskell: [optparse-applicative](https://hackage.haskell.org/package/optparse-applicative)
* Java: [picocli](https://picocli.info/)
* Julia: [ArgParse.jl](https://github.com/carlobaldassi/ArgParse.jl), [Comonicon.jl](https://github.com/comonicon/Comonicon.jl)
* Kotlin: [clikt](https://ajalt.github.io/clikt/)
* Node: [oclif](https://oclif.io/)
* Deno: [parseArgs](https://jsr.io/@std/cli/doc/parse-args/~/parseArgs)
* Perl: [Getopt::Long](https://metacpan.org/pod/Getopt::Long)
* PHP: [console](https://github.com/symfony/console), [CLImate](https://climate.thephpleague.com)
* Python: [Argparse](https://docs.python.org/3/library/argparse.html), [Click](https://click.palletsprojects.com/), [Typer](https://github.com/tiangolo/typer)
* Ruby: [TTY](https://ttytoolkit.org/)
* Rust: [clap](https://docs.rs/clap)
* Swift: [swift-argument-parser](https://github.com/apple/swift-argument-parser)

**성공 시 종료 코드 0을, 실패 시 0이 아닌 값을 반환하세요.**
종료 코드는 스크립트가 프로그램의 성공 또는 실패를 판단하는 방법이므로, 이를 정확하게 보고해야 합니다.
0이 아닌 종료 코드를 가장 중요한 실패 모드에 매핑하세요.

**출력을 `stdout`으로 보내세요.**
명령어의 주요 출력은 `stdout`으로 보내져야 합니다.
기계가 읽을 수 있는 모든 것도 `stdout`으로 보내야 합니다—이는 파이핑이 기본적으로 데이터를 보내는 곳입니다.

**메시지는 `stderr`로 보내세요.**
로그 메시지, 오류 등은 모두 `stderr`로 보내져야 합니다.
이는 명령어들이 파이프로 연결될 때, 이러한 메시지들이 사용자에게 표시되고 다음 명령어로 전달되지 않는다는 것을 의미합니다.

### 도움말 {#help}

**옵션이 없거나, `-h` 플래그 또는 `--help` 플래그가 전달될 때 도움말 텍스트를 표시하세요.**

**기본적으로 간단한 도움말 텍스트를 표시하세요.**
`myapp` 또는 `myapp subcommand`가 인자 없이 실행될 때, 도움말 텍스트를 표시하세요.

프로그램이나 하위 명령어가 매우 간단하고 인자가 필요하지 않은 경우(예: `ls`, `git pull`),
또는 기본적으로 대화형인 경우(예: `npm init`) 이 가이드라인을 무시할 수 있습니다.

간단한 도움말 텍스트는 다음 사항만 포함해야 합니다:

- 프로그램이 수행하는 작업에 대한 설명
- 하나 또는 두 개의 실행 예시
- 플래그가 많지 않은 경우, 플래그에 대한 설명
- 더 자세한 정보를 위해 `--help` 플래그를 전달하라는 안내

`jq`는 이를 잘 수행합니다.
`jq`를 입력하면, 소개 설명과 예시를 표시한 다음, 플래그의 전체 목록을 보려면 `jq --help`를 전달하라고 안내합니다:

```
$ jq
jq - commandline JSON processor [version 1.6]

Usage:    jq [options] <jq filter> [file...]
    jq [options] --args <jq filter> [strings...]
    jq [options] --jsonargs <jq filter> [JSON_TEXTS...]

jq is a tool for processing JSON inputs, applying the given filter to
its JSON text inputs and producing the filter's results as JSON on
standard output.

The simplest filter is ., which copies jq's input to its output
unmodified (except for formatting, but note that IEEE754 is used
for number representation internally, with all that that implies).

For more advanced filters see the jq(1) manpage ("man jq")
and/or https://stedolan.github.io/jq

Example:

    $ echo '{"foo": 0}' | jq .
    {
        "foo": 0
    }

For a listing of options, use jq --help.
```

**`-h`와 `--help`가 전달될 때 전체 도움말을 표시하세요.**
다음 모두가 도움말을 표시해야 합니다:

```
$ myapp
$ myapp --help
$ myapp -h
```

다른 플래그와 인자는 무시하세요—어떤 명령어의 끝에도 `-h`를 추가할 수 있어야 하고 도움말이 표시되어야 합니다.
`-h`를 중복 사용하지 마세요.

만약 당신의 프로그램이 `git`과 비슷하다면, 다음도 도움말을 제공해야 합니다:

```
$ myapp help
$ myapp help subcommand
$ myapp subcommand --help
$ myapp subcommand -h
```

**피드백과 이슈를 위한 지원 경로를 제공하세요.**
최상위 도움말 텍스트에 웹사이트나 GitHub 링크를 포함하는 것이 일반적입니다.

**도움말 텍스트에서 문서의 웹 버전에 대한 링크를 제공하세요.**
하위 명령어에 대한 특정 페이지나 앵커가 있다면, 직접 링크하세요.
웹에 더 자세한 문서가 있거나, 어떤 동작을 설명하는 추가 자료가 있는 경우 특히 유용합니다.

**예시를 먼저 보여주세요.**
사용자들은 다른 형태의 문서보다 예시를 더 많이 사용하는 경향이 있으므로, 도움말 페이지에서 먼저 보여주세요. 특히 일반적인 복잡한 사용 사례를 보여주세요.
무엇을 하는지 설명하는 데 도움이 되고 너무 길지 않다면, 실제 출력도 보여주세요.

일련의 예시들로 이야기를 만들어 복잡한 사용법으로 나아갈 수 있습니다.
<!-- TK example? -->

**많은 예시가 있다면, 치트 시트 명령어나 웹 페이지와 같은 다른 곳에 넣으세요.**
상세하고 고급 예시를 갖는 것은 유용하지만, 도움말 텍스트를 너무 길게 만들고 싶지는 않을 것입니다.

다른 도구와 통합하는 경우와 같은 더 복잡한 사용 사례의 경우, 완전한 튜토리얼을 작성하는 것이 적절할 수 있습니다.

**가장 일반적인 플래그와 명령어를 도움말 텍스트 시작 부분에 표시하세요.**
많은 플래그를 가지는 것은 괜찮지만, 정말 일반적인 것들이 있다면 그것들을 먼저 표시하세요.
예를 들어, Git 명령어는 시작하기 위한 명령어와 가장 자주 사용되는 하위 명령어를 먼저 표시합니다:

```
$ git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status
…
```

**도움말 텍스트에 서식을 사용하세요.**
볼드체 제목은 훨씬 더 쉽게 읽을 수 있게 해줍니다.
하지만, 사용자들이 이스케이프 문자의 벽을 마주하지 않도록 터미널에 독립적인 방식으로 시도하세요.

<pre>
<code>
<strong>$ heroku apps --help</strong>
list your apps

<strong>USAGE</strong>
  $ heroku apps

<strong>OPTIONS</strong>
  -A, --all          include apps in all teams
  -p, --personal     list apps in personal account when a default team is set
  -s, --space=space  filter by space
  -t, --team=team    team to use
  --json             output in json format

<strong>EXAMPLES</strong>
  $ heroku apps
  === My Apps
  example
  example2

  === Collaborated Apps
  theirapp   other@owner.name

<strong>COMMANDS</strong>
  apps:create     creates a new app
  apps:destroy    permanently destroy an app
  apps:errors     view app errors
  apps:favorites  list favorited apps
  apps:info       show detailed app information
  apps:join       add yourself to a team app
  apps:leave      remove yourself from a team app
  apps:lock       prevent team members from joining an app
  apps:open       open the app in a web browser
  apps:rename     rename an app
  apps:stacks     show the list of available stacks
  apps:transfer   transfer applications to another user or team
  apps:unlock     unlock an app so any team member can join
</code>
</pre>

참고: `heroku apps --help`가 페이저를 통해 파이프될 때, 명령어는 이스케이프 문자를 출력하지 않습니다.

**사용자가 잘못된 작업을 했고 무엇을 의도했는지 추측할 수 있다면, 제안하세요.**
예를 들어, `brew update jq`는 `brew upgrade jq`를 실행해야 한다고 알려줍니다.

제안된 명령어를 실행할지 물어볼 수 있지만, 강요하지는 마세요.
예를 들어:

```
$ heroku pss
 ›   Warning: pss is not a heroku command.
Did you mean ps? [y/n]:
```

수정된 구문을 제안하는 대신, 처음부터 올바르게 입력한 것처럼 그냥 실행하고 싶을 수 있습니다.
때로는 이것이 올바른 방법일 수 있지만, 항상 그런 것은 아닙니다.

첫째, 유효하지 않은 입력이 반드시 단순한 오타를 의미하는 것은 아닙니다. 사용자가 논리적 실수를 했거나 셸 변수를 잘못 사용했을 수 있습니다.
특히 결과 작업이 상태를 수정하는 경우, 그들이 의도한 바를 추측하는 것은 위험할 수 있습니다.

둘째, 사용자가 입력한 내용을 변경하면 올바른 구문을 배울 수 없다는 점을 알아야 합니다.
사실상 그들이 입력한 방식이 유효하고 올바르다고 판단하는 것이며, 그것을 무기한으로 지원하기로 약속하는 것입니다.
그러한 결정을 의도적으로 내리고, 두 구문을 모두 문서화하세요.

_추가 읽을거리: ["Do What I Mean"](http://www.catb.org/~esr/jargon/html/D/DWIM.html)_

**명령이 파이프로 전달되는 내용을 기대하고 있고 `stdin`이 대화형 터미널인 경우, 즉시 도움말을 표시하고 종료하세요.**
이는 `cat`처럼 그냥 멈춰있지 않는다는 의미입니다.
대안으로, `stderr`에 로그 메시지를 출력할 수 있습니다.

### 문서화 {#documentation}

[도움말 텍스트](#help)의 목적은 도구가 무엇인지, 어떤 옵션이 있는지, 그리고 가장 일반적인 작업을 수행하는 방법에 대한 간단하고 즉각적인 감각을 제공하는 것입니다.
반면에 문서화는 모든 세부 사항을 자세히 다루는 곳입니다.
사람들이 도구의 용도가 무엇이고, 무엇을 위한 것이 _아닌지_, 어떻게 작동하는지, 그리고 필요한 모든 작업을 수행하는 방법을 이해하기 위해 찾는 곳입니다.

**웹 기반 문서를 제공하세요.**
사람들이 온라인에서 도구의 문서를 검색하고 다른 사람들에게 특정 부분을 링크할 수 있어야 합니다.
웹은 가장 포괄적인 문서 형식입니다.

**터미널 기반 문서를 제공하세요.**
터미널의 문서는 여러 가지 좋은 특성이 있습니다: 접근이 빠르고, 설치된 도구의 특정 버전과 동기화되어 있으며, 인터넷 연결 없이도 작동합니다.

**man 페이지 제공을 고려하세요.**
Unix의 원래 문서 시스템인 [man 페이지](https://en.wikipedia.org/wiki/Man_page)는 오늘날에도 여전히 사용되고 있으며, 많은 사용자들이 도구에 대해 배우려고 할 때 첫 단계로 반사적으로 `man mycmd`를 확인합니다.
생성을 더 쉽게 하기 위해 [ronn](http://rtomayko.github.io/ronn/ronn.1.html)과 같은 도구를 사용할 수 있습니다(웹 문서도 생성할 수 있습니다).

하지만 모든 사람이 `man`을 알고 있는 것은 아니며 모든 플랫폼에서 실행되지는 않으므로, 터미널 문서가 도구 자체를 통해서도 접근 가능하도록 해야 합니다.
예를 들어, `git`과 `npm`은 `help` 하위 명령을 통해 man 페이지에 접근할 수 있게 하므로, `npm help ls`는 `man npm-ls`와 동일합니다.

```
NPM-LS(1)                                                            NPM-LS(1)

NAME
       npm-ls - List installed packages

SYNOPSIS
         npm ls [[<@scope>/]<pkg> ...]

         aliases: list, la, ll

DESCRIPTION
       This command will print to stdout all the versions of packages that are
       installed, as well as their dependencies, in a tree-structure.

       ...
```

### 출력 {#output}

**사람이 읽을 수 있는 출력이 가장 중요합니다.**
사람이 첫 번째, 기계가 두 번째입니다.
특정 출력 스트림(`stdout` 또는 `stderr`)이 사람에 의해 읽히고 있는지에 대한 가장 간단하고 직접적인 휴리스틱은 _TTY인지 아닌지_입니다.
어떤 언어를 사용하든, 이를 수행하기 위한 유틸리티나 라이브러리가 있을 것입니다(예: [Python](https://stackoverflow.com/questions/858623/how-to-recognize-whether-a-script-is-running-on-a-tty), [Node](https://nodejs.org/api/process.html#process_a_note_on_process_i_o), [Go](https://github.com/mattn/go-isatty)).

_[TTY가 무엇인지](https://unix.stackexchange.com/a/4132)에 대한 추가 읽을거리._

**사용성에 영향을 주지 않는 경우 기계가 읽을 수 있는 출력을 제공하세요.**
텍스트 스트림은 UNIX의 보편적인 인터페이스입니다.
프로그램은 일반적으로 텍스트 라인을 출력하고, 일반적으로 텍스트 라인을 입력으로 기대합니다.
따라서 여러 프로그램을 함께 조합할 수 있습니다.
이는 일반적으로 스크립트를 작성할 수 있게 하기 위한 것이지만,
프로그램을 사용하는 사람들의 사용성에도 도움이 될 수 있습니다.
예를 들어, 사용자는 출력을 `grep`에 파이프로 연결할 수 있어야 하며 예상대로 작동해야 합니다.

> "모든 프로그램의 출력은 아직 알려지지 않은 다른 프로그램의 입력이 될 것이라고 예상하세요."
— [Doug McIlroy](https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html)

**사람이 읽을 수 있는 출력이 기계가 읽을 수 있는 출력을 깨뜨리는 경우, `--plain`을 사용하여 `grep`이나 `awk`와 같은 도구와의 통합을 위해 일반 표 형식의 텍스트로 출력을 표시하세요.**
경우에 따라 사람이 읽을 수 있도록 하기 위해 정보를 다른 방식으로 출력해야 할 수 있습니다.
<!-- (TK example with and without --plain) -->
예를 들어, 라인 기반 테이블을 표시하는 경우 셀을 여러 줄로 나누어 화면 너비 내에서 더 많은 정보를 맞출 수 있습니다.
이는 한 줄에 하나의 데이터가 있어야 한다는 예상된 동작을 깨뜨리므로, 스크립트를 위해 `--plain` 플래그를 제공하여 모든 그러한 조작을 비활성화하고 한 줄에 하나의 레코드를 출력해야 합니다.

**`--json`이 전달되면 출력을 형식이 지정된 JSON으로 표시하세요.**
JSON은 일반 텍스트보다 더 많은 구조를 허용하므로 복잡한 데이터 구조를 출력하고 처리하기가 훨씬 쉽습니다.
[`jq`](https://stedolan.github.io/jq/)는 명령줄에서 JSON을 다루기 위한 일반적인 도구이며, 이제는 [JSON을 다루는 도구들의 전체 생태계](https://ilya-sher.org/2018/04/10/list-of-json-tools-for-command-line/)가 있습니다.

또한 웹에서도 널리 사용되므로, JSON을 프로그램의 입력과 출력으로 사용하면 `curl`을 사용하여 웹 서비스와 직접 파이프로 연결할 수 있습니다.

**성공 시 출력을 표시하되, 간단하게 유지하세요.**
전통적으로 문제가 없을 때 UNIX 명령은 사용자에게 아무 출력도 표시하지 않습니다.
스크립트에서 사용될 때는 이해가 되지만, 사람이 사용할 때는 명령이 멈추거나 고장난 것처럼 보일 수 있습니다.
예를 들어, `cp`는 시간이 오래 걸리더라도 아무것도 출력하지 않습니다.

아무것도 출력하지 않는 것이 가장 좋은 기본 동작인 경우는 드물지만, 일반적으로 더 적게 출력하는 쪽이 좋습니다.

출력을 원하지 않는 경우(예: 셸 스크립트에서 사용할 때), `stderr`를 `/dev/null`로 리디렉션하는 불편함을 피하기 위해 `-q` 옵션을 제공하여 모든 비필수 출력을 억제할 수 있습니다.

**상태를 변경하는 경우 사용자에게 알리세요.**
명령이 시스템의 상태를 변경할 때, 방금 일어난 일을 설명하는 것이 특히 중요합니다. 이를 통해 사용자가 머릿속으로 시스템의 상태를 모델링할 수 있습니다—특히 결과가 사용자가 요청한 것과 직접적으로 일치하지 않는 경우에 더욱 그렇습니다.

예를 들어, `git push`는 정확히 무엇을 하고 있는지, 그리고 원격 브랜치의 새로운 상태가 어떤지 알려줍니다:

```
$ git push
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 2.09 KiB | 2.09 MiB/s, done.
Total 10 (delta 8), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (8/8), completed with 8 local objects.
To github.com:replicate/replicate.git
 + 6c22c90...a2a5217 bfirsh/fix-delete -> bfirsh/fix-delete
```

**시스템의 현재 상태를 쉽게 볼 수 있게 만드세요.**
프로그램이 많은 복잡한 상태 변경을 수행하고 파일시스템에서 즉시 볼 수 없는 경우, 이를 쉽게 볼 수 있도록 하세요.

예를 들어, `git status`는 Git 저장소의 현재 상태에 대해 가능한 한 많은 정보를 알려주고, 상태를 수정하는 방법에 대한 힌트를 제공합니다:

```
$ git status
On branch bfirsh/fix-delete
Your branch is up to date with 'origin/bfirsh/fix-delete'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   cli/pkg/cli/rm.go

no changes added to commit (use "git add" and/or "git commit -a")
```

**사용자가 실행해야 할 명령을 제안하세요.**
여러 명령이 워크플로우를 형성할 때, 사용자에게 다음에 실행할 수 있는 명령을 제안하면 프로그램 사용 방법을 배우고 새로운 기능을 발견하는 데 도움이 됩니다.
예를 들어, 위의 `git status` 출력에서는 사용자가 보고 있는 상태를 수정하기 위해 실행할 수 있는 명령어를 제시합니다.

**프로그램의 내부 세계의 경계를 넘어서는 작업은 일반적으로 명시적이어야 합니다.**
여기에는 다음과 같은 것들이 포함됩니다:

- 사용자가 명시적으로 인자로 전달하지 않은 파일을 읽거나 쓰는 경우(해당 파일이 캐시와 같은 내부 프로그램 상태를 저장하는 것이 아닌 한).
- 원격 서버와 통신하는 경우, 예를 들어 파일을 다운로드하기 위해.

**ASCII 아트를 사용해서 정보 밀도를 높이세요!**
예를 들어, `ls`는 권한을 스캔 가능한 방식으로 표시합니다.
처음 볼 때는 대부분의 정보를 무시할 수 있습니다.
그런 다음 작동 방식을 배우면서 시간이 지날수록 더 많은 패턴을 발견하게 됩니다.

```
-rw-r--r-- 1 root root     68 Aug 22 23:20 resolv.conf
lrwxrwxrwx 1 root root     13 Mar 14 20:24 rmt -> /usr/sbin/rmt
drwxr-xr-x 4 root root   4.0K Jul 20 14:51 security
drwxr-xr-x 2 root root   4.0K Jul 20 14:53 selinux
-rw-r----- 1 root shadow  501 Jul 20 14:44 shadow
-rw-r--r-- 1 root root    116 Jul 20 14:43 shells
drwxr-xr-x 2 root root   4.0K Jul 20 14:57 skel
-rw-r--r-- 1 root root      0 Jul 20 14:43 subgid
-rw-r--r-- 1 root root      0 Jul 20 14:43 subuid
```

**의도를 가지고 색상을 사용하세요.**
예를 들어, 사용자가 알아차릴 수 있도록 텍스트를 강조하거나 오류를 나타내기 위해 빨간색을 사용할 수 있습니다.
과도하게 사용하지 마세요—모든 것이 다른 색상이면 색상의 의미가 사라지고 읽기만 더 어려워집니다.

**프로그램이 터미널에서 실행되지 않거나 사용자가 요청한 경우 색상을 비활성화하세요.**
다음과 같은 경우에 색상이 비활성화되어야 합니다:

- `stdout` 또는 `stderr`이 대화형 터미널(TTY)이 아닌 경우.
  개별적으로 확인하는 것이 가장 좋습니다—`stdout`을 다른 프로그램으로 파이핑하는 경우에도 `stderr`에서 색상을 받는 것이 유용할 수 있습니다.
- `NO_COLOR` 환경 변수가 설정된 경우.
- `TERM` 환경 변수의 값이 `dumb`인 경우.
- 사용자가 `--no-color` 옵션을 전달하는 경우.
- 사용자가 특별히 당신의 프로그램에 대해서만 색상을 비활성화하고 싶은 경우를 위해 `MYAPP_NO_COLOR` 환경 변수를 추가할 수도 있습니다.

_추가 자료: [no-color.org](https://no-color.org/), [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)_

**`stdout`이 대화형 터미널이 아닌 경우 애니메이션을 표시하지 마세요.**
이렇게 하면 CI 로그 출력에서 진행 표시줄이 크리스마스 트리처럼 보이는 것을 막을 수 있습니다.

**명확성을 높일 수 있는 경우 기호와 이모지를 사용하세요.**
여러 가지를 구별해야 하거나, 사용자의 주의를 끌거나, 단순히 특색을 더하고 싶을 때는 그림이 단어보다 나을 수 있습니다.
하지만 주의하세요—과도하게 사용하면 프로그램이 복잡해 보이거나 장난감처럼 느껴질 수 있습니다.

예를 들어, [yubikey-agent](https://github.com/FiloSottile/yubikey-agent)는 출력에 구조를 추가하기 위해 이모지를 사용하여 단순한 텍스트 벽이 되지 않도록 하고, ❌를 사용하여 중요한 정보에 주의를 끕니다:

```shell-session
$ yubikey-agent -setup
🔐 The PIN is up to 8 numbers, letters, or symbols. Not just numbers!
❌ The key will be lost if the PIN and PUK are locked after 3 incorrect tries.

Choose a new PIN/PUK: 
Repeat the PIN/PUK: 

🧪 Retriculating splines …

✅ Done! This YubiKey is secured and ready to go.
🤏 When the YubiKey blinks, touch it to authorize the login.

🔑 Here's your new shiny SSH public key:
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBCEJ/
UwlHnUFXgENO3ifPZd8zoSKMxESxxot4tMgvfXjmRp5G3BGrAnonncE7Aj11pn3SSYgEcrrn2sMyLGpVS0=

💭 Remember: everything breaks, have a backup plan for when this YubiKey does.
```

**기본적으로 소프트웨어 제작자만이 이해할 수 있는 정보는 출력하지 마세요.**
출력이 당신(개발자)이 소프트웨어가 하는 일을 이해하는 데만 도움이 된다면, 일반 사용자에게는 기본적으로 표시되지 않아야 하며—상세 모드에서만 표시되어야 합니다.

프로젝트 외부의 사람들과 프로젝트를 처음 접하는 사람들로부터 사용성 피드백을 받으세요.
그들은 당신이 코드에 너무 가까이 있어서 알아차리지 못하는 중요한 문제들을 볼 수 있도록 도와줄 것입니다.

**적어도 기본적으로는 `stderr`를 로그 파일처럼 취급하지 마세요.**
상세 모드가 아닌 한, 로그 레벨 라벨(`ERR`, `WARN` 등)이나 불필요한 상황 정보를 출력하지 마세요.

**많은 텍스트를 출력하는 경우 페이저(예: `less`)를 사용하세요.**
예를 들어, `git diff`는 기본적으로 이렇게 합니다.
페이저 사용은 오류가 발생하기 쉬우므로, 구현 시 사용자 경험을 악화시키지 않도록 주의하세요.
`stdin` 또는 `stdout`이 대화형 터미널인 경우에만 페이저를 사용합니다.

`less`에 사용할 수 있는 적절한 옵션 세트는 `less -FIRX`입니다.
이는 내용이 한 화면을 채우는 경우 페이징하지 않고, 검색 시 대소문자를 무시하며, 색상과 서식을 활성화하고, `less`가 종료될 때 내용을 화면에 남겨둡니다.

당신이 사용하는 언어에는 `less`로 파이핑하는 것보다 더 강력한 라이브러리가 있을 수 있습니다.
예를 들어, Python의 [pypager](https://github.com/prompt-toolkit/pypager)가 있습니다.

### 오류 {#errors}

문서를 참조하는 가장 일반적인 이유 중 하나는 오류를 수정하기 위해서입니다.
오류를 문서화할 수 있다면, 이는 사용자의 많은 시간을 절약해줄 것입니다.

**오류를 잡아내고 [사람이 이해하기 쉽게 다시 작성하세요](https://www.nngroup.com/articles/error-message-guidelines/).**
오류가 발생할 것으로 예상되는 경우, 그것을 잡아내고 오류 메시지를 유용하게 다시 작성하세요.
사용자가 잘못된 작업을 했을 때 프로그램이 올바른 방향으로 안내하는 대화처럼 생각하세요.
예: "file.txt에 쓸 수 없습니다. 'chmod +w file.txt'를 실행하여 쓰기 가능하게 만들어야 할 수 있습니다."

**신호 대 잡음비가 중요합니다.**
관련 없는 출력을 많이 생성할수록 사용자가 자신이 무엇을 잘못했는지 파악하는 데 더 오랜 시간이 걸립니다.
프로그램이 동일한 유형의 여러 오류를 생성하는 경우, 비슷해 보이는 여러 줄을 출력하는 대신 하나의 설명 헤더 아래에 그룹화하는 것을 고려하세요.

**사용자가 먼저 어디를 볼지 고려하세요.**
가장 중요한 정보를 출력의 끝 부분에 배치하세요.
빨간색 텍스트는 시선을 끌기 때문에, 의도적으로 그리고 절제하여 사용하세요.

**예상치 못하거나 설명할 수 없는 오류가 있는 경우, 디버그 및 트레이스백 정보와 버그를 제출하는 방법에 대한 지침을 제공하세요.**
단, 신호 대 잡음비를 잊지 마세요: 사용자가 이해하지 못하는 정보로 압도하고 싶지는 않을 것입니다.
디버그 로그를 터미널에 출력하는 대신 파일에 작성하는 것을 고려하세요.

**버그 리포트를 제출하는 것을 쉽게 만드세요.**
할 수 있는 좋은 방법 중 하나는 URL을 제공하고 가능한 한 많은 정보를 미리 채워넣는 것입니다.

_더 읽을거리: [Google: Writing Helpful Error Messages](https://developers.google.com/tech-writing/error-messages), [Nielsen Norman Group: Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines)_

### 인자와 플래그 {#arguments-and-flags}

용어에 대한 참고 사항:

- _인자_ 또는 _args_는 명령어에 대한 위치 매개변수입니다.
  예를 들어, `cp`에 제공하는 파일 경로가 args입니다.
  args의 순서는 종종 중요합니다: `cp foo bar`는 `cp bar foo`와 다른 의미를 가집니다.
- _플래그_는 하이픈과 단일 문자 이름(`-r`) 또는 이중 하이픈과 여러 문자 이름(`--recursive`)으로 표시되는 명명된 매개변수입니다.
  사용자가 지정한 값을 포함할 수도 있고 포함하지 않을 수도 있습니다(`--file foo.txt` 또는 `--file=foo.txt`).
  일반적으로 플래그의 순서는 프로그램의 의미에 영향을 미치지 않습니다.

**인자보다 플래그를 선호하세요.**
조금 더 타이핑해야 하지만, 무슨 일이 일어나는지 훨씬 더 명확하게 알 수 있습니다.
또한 향후 입력을 받는 방식을 변경하기가 더 쉽습니다.
인자를 사용할 때는 기존 동작을 깨뜨리거나 모호성을 만들지 않고 새로운 입력을 추가하는 것이 불가능할 수 있습니다.

_인용: [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)._

**모든 플래그의 전체 길이 버전을 가지세요.**
예를 들어, `-h`와 `--help` 둘 다 있어야 합니다.
전체 버전은 자세하고 설명적이어야 하는 스크립트에서 유용하며, 플래그의 의미를 찾아볼 필요가 없습니다.

_인용: [GNU Coding Standards](https://www.gnu.org/prep/standards/html_node/Command_002dLine-Interfaces.html)._

**한 글자 플래그는 자주 사용되는 플래그에만 사용하세요,** 특히 하위 명령을 사용할 때 최상위 수준에서 그렇게 하세요.
이렇게 하면 짧은 플래그의 네임스페이스를 "오염"시키지 않고, 나중에 추가하는 플래그에 복잡한 글자와 대소문자를 사용할 필요가 없습니다.

**여러 파일에 대한 간단한 작업에는 여러 인자를 사용해도 좋습니다.**
예를 들어, `rm file1.txt file2.txt file3.txt`.
이는 glob 패턴과도 잘 작동합니다: `rm *.txt`.

**서로 다른 것에 대해 두 개 이상의 인자가 있다면, 아마도 뭔가 잘못하고 있는 것입니다.**
예외는 간결함이 기억할 가치가 있는 일반적이고 기본적인 동작입니다.
예를 들어, `cp <source> <destination>`.

_인용: [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)._

**표준이 있다면 플래그에 표준 이름을 사용하세요.**
다른 일반적으로 사용되는 명령이 플래그 이름을 사용한다면, 그 기존 패턴을 따르는 것이 best practice입니다.
이렇게 하면 사용자가 두 가지 다른 옵션(그리고 어떤 명령에 적용되는지)을 기억할 필요가 없으며, 도움말 텍스트를 보지 않고도 옵션을 추측할 수 있습니다.

다음은 일반적으로 사용되는 옵션들의 목록입니다:

- `-a`, `--all`: 모두.
  예를 들어, `ps`, `fetchmail`.
- `-d`, `--debug`: 디버깅 출력을 표시.
- `-f`, `--force`: 강제 실행.
  예를 들어, `rm -f`는 권한이 없다고 생각하더라도 파일을 강제로 삭제합니다.
  이는 일반적으로 사용자 확인이 필요한 파괴적인 작업을 수행하는 명령에도 유용하지만, 스크립트에서 해당 파괴적인 작업을 강제로 수행하고 싶을 때 사용합니다.
- `--json`: JSON 출력을 표시.
  [output](#output) 섹션을 참조하세요.
- `-h`, `--help`: 도움말.
  이는 도움말만을 의미해야 합니다.
  [help](#help) 섹션을 참조하세요.
- `--no-input`: [interactivity](#interactivity) 섹션을 참조하세요.
- `-o`, `--output`: 출력 파일.
  예를 들어, `sort`, `gcc`.
- `-p`, `--port`: 포트.
  예를 들어, `psql`, `ssh`.
- `-q`, `--quiet`: 조용한 모드.
  출력을 줄입니다.
  이는 스크립트에서 실행할 때 숨기고 싶은 사람을 위한 출력을 표시할 때 특히 유용합니다.
- `-u`, `--user`: 사용자.
  예를 들어, `ps`, `ssh`.
- `--version`: 버전.
- `-v`: 이는 종종 상세 출력(verbose) 또는 버전을 의미할 수 있습니다.
  혼동을 피하기 위해 상세 출력에는 `-d`를 사용하고 이것은 버전을 위해 사용하거나 아무것도 사용하지 않을 수 있습니다.

**대부분의 사용자에게 맞는 것을 기본값으로 만드세요.**
설정 가능하게 만드는 것은 좋지만, 대부분의 사용자는 올바른 플래그를 찾아서 항상 사용하는 것을 기억하지 않을 것입니다(또는 별칭을 만들지 않을 것입니다).
기본값이 아니라면, 대부분의 사용자에게 더 나쁜 경험을 제공하는 것입니다.

예를 들어, `ls`는 스크립트와 다른 역사적인 이유로 간단한 기본 출력을 가지고 있지만, 오늘날 설계된다면 아마도 `ls -lhFGT`가 기본값일 것입니다.

**사용자 입력을 요청하세요.**
사용자가 인자나 플래그를 전달하지 않으면, 입력을 요청하세요.
([Interactivity](#interactivity) 참조)

**프롬프트를 _절대_ 필수로 하지 마세요.**
항상 플래그나 인자로 입력을 전달할 수 있는 방법을 제공하세요.
`stdin`이 대화형 터미널이 아니라면, 프롬프트를 건너뛰고 해당 플래그/인자를 필수로 요구하세요.

**위험한 작업을 수행하기 전에 확인하세요.**
일반적인 관례는 대화형으로 실행 중일 때 사용자에게 `y` 또는 `yes`를 입력하도록 요청하거나, 그렇지 않은 경우 `-f` 또는 `--force`를 전달하도록 요구하는 것입니다.

"위험한"은 주관적인 용어이며, 다양한 수준의 위험이 있습니다:

- **경미:** 파일 삭제와 같은 작은 로컬 변경.
  확인을 요청할 수도 있고, 그렇지 않을 수도 있습니다.
  예를 들어, 사용자가 명시적으로 "delete"와 같은 명령을 실행하는 경우에는 아마도 물어볼 필요가 없을 것입니다.
- **중간:** 디렉토리 삭제와 같은 더 큰 로컬 변경, 어떤 종류의 리소스를 삭제하는 것과 같은 원격   변경, 또는 쉽게 되돌릴 수 없는 복잡한 대량 수정.
여기서는 일반적으로 확인을 요청하고 싶을 것입니다.
  사용자에게 작업을 실제로 수행하기 전에 어떤 일이 일어날지 볼 수 있는 "dry run" 방법을 제공하는 것을 고려하세요.
- **심각:** 전체 원격 애플리케이션이나 서버와 같은 복잡한 것을 삭제하는 경우.
  여기서는 단순히 확인을 요청하는 것이 아니라, 실수로 확인하기 어렵게 만들고 싶을 것입니다.
  삭제하려는 것의 이름과 같은 간단하지 않은 것을 입력하도록 요청하는 것을 고려하세요.
  대안으로 `--confirm="name-of-thing"`과 같은 플래그를 전달할 수 있게 하여, 여전히 스크립트로 작성할 수 있게 하세요.

실수로 물건을 파괴할 수 있는 명백하지 않은 방법이 있는지 고려하세요.
예를 들어, 구성 파일의 숫자를 10에서 1로 변경하면 9개의 항목이 암묵적으로 삭제되는 상황을 상상해보세요—이는 심각한 위험으로 간주되어야 하며, 실수로 하기 어려워야 합니다.

**입력이나 출력이 파일인 경우, `-`를 지원하여 `stdin`에서 읽거나 `stdout`에 쓰도록 하세요.**
이렇게 하면 임시 파일을 사용하지 않고도 다른 명령의 출력을 당신의 명령의 입력으로, 또는 그 반대로 사용할 수 있습니다.
예를 들어, `tar`는 `stdin`에서 파일을 추출할 수 있습니다:

```
$ curl https://example.com/something.tar.gz | tar xvf -
```

**플래그가 선택적 값을 받을 수 있는 경우, "none"과 같은 특별한 단어를 허용하세요.**
예를 들어, `ssh -F`는 대체 `ssh_config` 파일의 선택적 파일 이름을 받으며, `ssh -F none`은 구성 파일 없이 SSH를 실행합니다. 빈 값을 사용하지 마세요—이는 인자가 플래그 값인지 인자인지 모호하게 만들 수 있습니다.

**가능하다면, 인자, 플래그, 하위 명령의 순서를 독립적으로 만드세요.**
많은 CLI, 특히 하위 명령이 있는 CLI는 다양한 인자를 어디에 둘 수 있는지에 대한 명시되지 않은 규칙이 있습니다.
예를 들어 명령에 하위 명령 앞에 두어야만 작동하는 `--foo` 플래그가 있을 수 있습니다:

```
mycmd --foo=1 subcmd
works

$ mycmd subcmd --foo=1
unknown flag: --foo
```

이는 사용자에게 매우 혼란스러울 수 있습니다—특히 사용자가 명령을 작동시키려고 할 때 가장 일반적으로 하는 일 중 하나는 위쪽 화살표를 눌러 마지막 호출을 가져오고, 끝에 다른 옵션을 추가하고, 다시 실행하는 것이기 때문입니다.
가능하다면 두 형식을 동등하게 만들려고 시도하세요. 단, 인자 파서의 제한에 부딪힐 수 있습니다.

**플래그에서 직접 비밀을 읽지 마세요.**
명령이 `--password` 인자와 같이 비밀을 받을 때,
인자 값은 `ps` 출력과 잠재적으로 셸 히스토리에 비밀을 유출할 것입니다.
그리고, 이러한 종류의 플래그는 비밀에 대해 안전하지 않은 환경 변수의 사용을 조장합니다.
(환경 변수는 다른 사용자가 읽을 수 있고 디버그 로그에 값이 남는 등의 이유로 안전하지 않습니다.)

민감한 데이터는 `--password-file` 인자와 같이 파일을 통해서만, 또는 `STDIN`을 통해서만 받는 것을 고려하세요.
`--password-file` 인자는 다양한 상황에서 비밀을 신중하게 전달할 수 있게 합니다.

(Bash에서 `--password $(< password.txt)`를 사용하여 파일의 내용을 인자로 전달할 수 있습니다.
이 접근 방식은 파일의 내용을 `ps` 출력에 유출하는 동일한 보안 문제가 있습니다.
피하는 것이 좋습니다.)

### 상호작용 {#interactivity}

**`stdin`이 대화형 터미널(TTY)인 경우에만 프롬프트나 대화형 요소를 사용하세요.**
이는 명령에 데이터를 파이프로 전달하는지 또는 스크립트에서 실행되는지 여부를 판단하는 꽤 신뢰할 만한 방법입니다. 후자의 경우 프롬프트가 작동하지 않으므로 사용자에게 어떤 플래그를 전달해야 하는지 알려주는 오류를 발생시켜야 합니다.

**`--no-input`이 전달되면, 프롬프트를 표시하거나 대화형 작업을 수행하지 마세요.**
이는 사용자에게 명령의 모든 프롬프트를 비활성화하는 명시적인 방법을 제공합니다.
명령에 입력이 필요한 경우, 실패하고 사용자에게 정보를 플래그로 전달하는 방법을 알려주세요.

**비밀번호를 입력받을 때는 사용자가 입력하는 동안 표시하지 마세요.**
이는 터미널에서 에코를 끄는 것으로 수행됩니다.
당신의 언어에는 이를 위한 헬퍼가 있어야 합니다.

**사용자가 탈출할 수 있게 하세요.**
빠져나가는 방법을 명확하게 만드세요.
(vim이 하는 것처럼 하지 마세요.)
프로그램이 네트워크 I/O 등에서 멈추면, 항상 Ctrl-C가 작동하게 하세요.
Ctrl-C로 종료할 수 없는 프로그램 실행(SSH, tmux, telnet 등)을 감싸는 경우, 그 방법을 명확하게 하세요.
예를 들어, SSH는 `~` 이스케이프 문자로 이스케이프 시퀀스를 허용합니다.

### 하위 명령 {#subcommands}

충분히 복잡한 도구가 있다면, 하위 명령 집합을 만들어 복잡성을 줄일 수 있습니다.
매우 밀접하게 관련된 여러 도구가 있다면, 하나의 명령으로 결합하여 사용하고 발견하기 쉽게 만들 수 있습니다(예: RCS vs. Git).

이들은 전역 플래그, 도움말 텍스트, 구성, 저장 메커니즘과 같은 것들을 공유하는 데 유용합니다.

**하위 명령 전체에서 일관성을 유지하세요.**
동일한 것에 대해 동일한 플래그 이름을 사용하고, 비슷한 출력 형식을 가지세요 등.

**여러 수준의 하위 명령에 대해 일관된 이름을 사용하세요.**
복잡한 소프트웨어가 많은 객체와 그 객체들에 대해 수행할 수 있는 작업이 있는 경우, 하나는 명사이고 하나는 동사인 두 수준의 하위 명령을 사용하는 것이 일반적인 패턴입니다.
예를 들어, `docker container create`.
서로 다른 유형의 객체에 대해 일관된 동사를 사용하세요.

`명사 동사` 또는 `동사 명사` 순서 둘 다 작동하지만, `명사 동사`가 더 일반적인 것 같습니다.

_더 읽을거리: [User experience, CLIs, and breaking the world, by John Starich](https://uxdesign.cc/user-experience-clis-and-breaking-the-world-baed8709244f)._

**모호하거나 비슷한 이름의 명령을 가지지 마세요.**
예를 들어, "update"와 "upgrade"라는 두 개의 하위 명령을 가지는 것은 꽤 혼란스럽습니다.
다른 단어를 사용하거나, 추가 단어로 모호성을 없애고 싶을 수 있습니다.

### 안정성 {#robustness-guidelines}

**사용자 입력을 검증하세요.**
프로그램이 사용자로부터 데이터를 받는 모든 곳에서, 결국 잘못된 데이터가 입력될 것입니다.
문제가 발생하기 전에 미리 확인하고 중단하며, [오류를 이해하기 쉽게 만드세요](#errors).

**빠른 것보다 반응성이 더 중요합니다.**
100ms 이내에 사용자에게 무언가를 출력하세요.
네트워크 요청을 할 경우, 실행 전에 무언가를 출력하여 멈춰있거나 고장난 것처럼 보이지 않도록 하세요.

**작업이 오래 걸리면 진행 상황을 보여주세요.**
프로그램이 한동안 아무 출력도 하지 않으면, 고장난 것처럼 보일 것입니다.
좋은 스피너나 진행 표시기는 프로그램이 실제보다 더 빠르게 보이게 만들 수 있습니다.

Ubuntu 20.04는 터미널 하단에 고정되는 멋진 진행 표시줄이 있습니다.

<!-- (TK reproduce this as a code block or animated SVG) -->

진행 표시줄이 한 곳에 오래 멈춰있으면, 사용자는 작업이 여전히 진행 중인지 프로그램이 충돌했는지 알 수 없습니다.
남은 예상 시간을 보여주거나, 최소한 애니메이션 요소라도 있으면 여전히 작업 중임을 알려줄 수 있습니다.

진행 표시줄을 생성하는 좋은 라이브러리가 많이 있습니다.
예를 들어, Python용 [tqdm](https://github.com/tqdm/tqdm), Go용 [schollz/progressbar](https://github.com/schollz/progressbar), Node.js용 [node-progress](https://github.com/visionmedia/node-progress)가 있습니다.

**가능한 곳에서는 병렬로 작업하되, 신중하게 하세요.**
쉘에서 진행 상황을 보고하는 것은 이미 어려운데, 병렬 프로세스에서는 열 배 더 어렵습니다.
안정적이고 출력이 혼란스럽게 섞이지 않도록 하세요.
라이브러리를 사용할 수 있다면 사용하세요—이는 직접 작성하고 싶지 않은 코드입니다.
Python용 [tqdm](https://github.com/tqdm/tqdm)과 Go용 [schollz/progressbar](https://github.com/schollz/progressbar) 같은 라이브러리는 여러 진행 표시줄을 기본적으로 지원합니다.

장점은 사용성이 크게 향상될 수 있다는 것입니다.
예를 들어, `docker pull`의 여러 진행 표시줄은 진행 상황에 대한 중요한 통찰을 제공합니다.

```
$ docker image pull ruby
Using default tag: latest
latest: Pulling from library/ruby
6c33745f49b4: Pull complete 
ef072fc32a84: Extracting [================================================>  ]  7.569MB/7.812MB
c0afb8e68e0b: Download complete 
d599c07d28e6: Download complete 
f2ecc74db11a: Downloading [=======================>                           ]  89.11MB/192.3MB
3568445c8bf2: Download complete 
b0efebc74f25: Downloading [===========================================>       ]  19.88MB/22.88MB
9cb1ba6838a0: Download complete 
```

주의할 점: 상황이 _잘_ 진행될 때 진행 표시줄 뒤에 로그를 숨기면 사용자가 상황을 이해하기 훨씬 쉽지만, 오류가 발생하면 반드시 로그를 출력하세요.
그렇지 않으면 디버깅이 매우 어려울 것입니다.

**시간 제한을 설정하세요.**
네트워크 타임아웃을 설정할 수 있게 하고, 영원히 멈추지 않도록 적절한 기본값을 설정하세요.

**복구 가능하게 만드세요.**
프로그램이 일시적인 이유로 실패할 경우(예: 인터넷 연결이 끊김), `<up>`과 `<enter>`를 눌러서 중단된 지점부터 다시 시작할 수 있어야 합니다.

**크래시 온리로 만드세요.**
이는 멱등성의 다음 단계입니다.
작업 후 정리가 필요 없게 하거나 정리를 다음 실행으로 미룰 수 있다면, 프로그램은 실패나 중단 시 즉시 종료될 수 있습니다.
이렇게 하면 더 견고하고 반응성이 좋아집니다.

_인용: [크래시 온리 소프트웨어: 겉보기와는 다르다](https://lwn.net/Articles/191059/)._

**사람들은 당신의 프로그램을 잘못 사용할 것입니다.**
이에 대비하세요.
그들은 스크립트로 감싸고, 불안정한 인터넷 연결에서 사용하고, 한 번에 여러 인스턴스를 실행하고, 테스트하지 않은 환경에서 예상치 못한 특이사항과 함께 사용할 것입니다.
(macOS 파일시스템이 대소문자를 구분하지 않지만 보존한다는 것을 알고 계셨나요?)

### 미래 보장 {#future-proofing}

모든 종류의 소프트웨어에서, 인터페이스가 길고 잘 문서화된 폐기 과정 없이 변경되지 않는 것이 중요합니다.
하위 명령, 인수, 플래그, 설정 파일, 환경 변수: 이들은 모두 인터페이스이며, 당신은 이들이 계속 작동하도록 유지하기로 약속한 것입니다.
([시맨틱 버저닝](https://semver.org/)은 변경을 어느 정도만 정당화할 수 있습니다; 매달 메이저 버전을 올린다면, 그것은 무의미합니다.)

**가능한 한 변경사항을 추가적으로 유지하세요.**
플래그의 동작을 이전 버전과 호환되지 않는 방식으로 수정하는 대신, 인터페이스가 너무 비대해지지 않는 한 새로운 플래그를 추가할 수 있습니다.
(참고: [인수보다 플래그 선호](#arguments-and-flags).)

**비추가적 변경을 하기 전에 경고하세요.**
결국, 인터페이스를 깨뜨리는 것을 피할 수 없다는 것을 알게 될 것입니다.
그렇게 하기 전에, 프로그램 자체에서 사용자에게 미리 경고하세요: 폐기하려는 플래그를 사용할 때, 곧 변경될 것이라고 알려주세요.
오늘 그들의 사용방식을 미래에도 사용할 수 있도록 수정하는 방법이 있는지 확인하고, 그 방법을 알려주세요.

가능하다면, 그들이 사용방식을 변경했을 때를 감지하고 더 이상 경고를 표시하지 않아야 합니다: 이제 변경사항을 최종적으로 적용할 때 아무것도 눈치채지 못할 것입니다.

**사람을 위한 출력을 변경하는 것은 보통 괜찮습니다.**
인터페이스를 사용하기 쉽게 만드는 유일한 방법은 반복적으로 개선하는 것이며, 출력이 인터페이스로 간주된다면 개선할 수 없습니다.
출력을 안정적으로 유지하기 위해 스크립트에서 `--plain`이나 `--json`을 사용하도록 사용자에게 권장하세요 ([출력](#output) 참조).

**포괄적인 서브커맨드를 만들지 마세요.**
가장 많이 사용될 것 같은 서브커맨드가 있다면, 간결성을 위해 이를 완전히 생략하도록 하고 싶을 수 있습니다.
예를 들어, 임의의 셸 명령을 감싸는 `run` 명령이 있다고 가정해보세요:

    $ mycmd run echo "hello world"

`mycmd`의 첫 번째 인수가 기존 서브커맨드의 이름이 아닌 경우 사용자가 `run`을 의미한다고 가정하여 다음과 같이 입력할 수 있게 만들 수 있습니다:

    $ mycmd echo "hello world"

하지만 이것은 심각한 단점이 있습니다: 이제 기존 사용법을 깨뜨릴 위험 없이는 `echo`라는 이름의 서브커맨드나 _다른 어떤 것도_ 추가할 수 없게 됩니다.
`mycmd echo`를 사용하는 스크립트가 있다면, 사용자가 새 버전의 도구로 업그레이드한 후에는 완전히 다른 동작을 하게 될 것입니다.

**하위 명령의 임의 약어를 허용하지 마세요.**
예를 들어, 명령에 `install` 하위 명령이 있다고 가정해보세요.
추가할 때, 사용자의 타이핑을 줄이기 위해 `mycmd ins`나 심지어 `mycmd i`와 같은 모호하지 않은 접두사를 입력할 수 있게 하여 `mycmd install`의 별칭이 되도록 했습니다.
이제 곤란해졌습니다: `i`로 시작하는 명령을 더 이상 추가할 수 없습니다. `i`가 `install`을 의미한다고 가정하는 스크립트들이 있기 때문입니다.

별칭은 잘못된 것이 아닙니다—타이핑을 줄이는 것은 좋습니다—하지만 명시적이어야 하고 안정적으로 유지되어야 합니다.

**"시한 폭탄"을 만들지 마세요.**
지금으로부터 20년 후를 상상해보세요.
당신의 명령이 오늘처럼 똑같이 실행될까요, 아니면 인터넷의 외부 의존성이 변경되거나 더 이상 유지보수되지 않아 작동이 중단될까요?
20년 후에 존재하지 않을 가능성이 가장 높은 서버는 당신이 지금 유지보수하고 있는 서버입니다.
(하지만 Google Analytics에 대한 차단 호출을 내장하지도 마세요.)

### 신호와 제어 문자 {#signals}

**사용자가 Ctrl-C(INT 신호)를 누르면, 가능한 한 빨리 종료하세요.**
정리를 시작하기 전에 즉시 무언가를 말하세요.
정리 코드에 시간 제한을 추가하여 영원히 멈추지 않도록 하세요.

**사용자가 오래 걸릴 수 있는 정리 작업 중에 Ctrl-C를 누르면, 해당 작업을 건너뛰세요.**
파괴적인 동작일 수 있는 경우, Ctrl-C를 다시 눌렀을 때 어떤 일이 일어날지 사용자에게 알려주세요.

예를 들어, Docker Compose를 종료할 때 Ctrl-C를 두 번 누르면 컨테이너를 정상적으로 종료하는 대신 즉시 강제 중지할 수 있습니다.

```
$  docker-compose up
…
^CGracefully stopping... (press Ctrl+C again to force)
```

프로그램은 정리가 실행되지 않은 상황에서 시작될 것을 예상해야 합니다.
([크래시 온리 소프트웨어: 겉보기와는 다르다](https://lwn.net/Articles/191059/) 참조.)

### 설정 {#configuration}

커맨드라인 도구들은 다양한 종류의 설정과 이를 제공하는 여러 가지 방법(플래그, 환경 변수, 프로젝트 수준의 설정 파일)을 가지고 있습니다.
각각의 설정을 제공하는 가장 좋은 방법은 몇 가지 요소에 따라 달라지며, 그 중 가장 중요한 것은 _특수성_, _안정성_, _복잡성_입니다.

설정은 일반적으로 다음과 같은 몇 가지 범주로 나뉩니다:

1.  명령어를 실행할 때마다 달라질 가능성이 있는 경우.

    예시:

    - 디버깅 출력 수준 설정
    - 프로그램의 안전 모드 또는 시험 실행 활성화

    권장사항: **[플래그](#arguments-and-flags)를 사용하세요.**
    [환경 변수](#environment-variables)도 유용할 수 있습니다.

2.  일반적으로는 실행할 때마다 안정적이지만, 항상 그런 것은 아닌 경우.
    프로젝트마다 다를 수 있습니다.
    동일한 프로젝트에서 작업하는 서로 다른 사용자 간에 확실히 차이가 있습니다.

    이러한 유형의 설정은 종종 개별 컴퓨터에 특화되어 있습니다.

    예시:

    - 프로그램 시작에 필요한 항목들의 기본값이 아닌 경로 제공
    - 출력에 색상을 표시할지 또는 어떻게 표시할지 지정
    - 모든 요청을 라우팅할 HTTP 프록시 서버 지정

    권장사항: **[플래그](#arguments-and-flags)와 함께 [환경 변수](#environment-variables)도 사용하세요.**
    사용자들은 전역적으로 적용되도록 셸 프로필에 변수를 설정하거나, 특정 프로젝트의 경우 `.env`에 설정할 수 있습니다.

    이러한 설정이 충분히 복잡한 경우에는 별도의 설정 파일이 필요할 수 있지만, 일반적으로 환경 변수로도 충분합니다.

3.  프로젝트 내에서 모든 사용자에게 안정적인 경우.

    이는 버전 관리에 속하는 설정 유형입니다.
    `Makefile`, `package.json`, `docker-compose.yml`과 같은 파일들이 이러한 예시입니다.

    권장사항: **명령어별 버전 관리 파일을 사용하세요.**

**XDG-spec을 따르세요.**
2010년에 X Desktop Group(현재 [freedesktop.org](https://freedesktop.org))은 설정 파일이 위치할 수 있는 기본 디렉터리의 위치에 대한 사양을 개발했습니다.
목표 중 하나는 범용 `~/.config` 폴더를 지원하여 사용자의 홈 디렉터리에 있는 도트 파일의 증가를 제한하는 것이었습니다.
XDG 기본 디렉터리 사양([전체 사양](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html), [요약](https://wiki.archlinux.org/index.php/XDG_Base_Directory#Specification))은 yarn, fish, wireshark, emacs, neovim, tmux 및 여러분이 알고 있고 좋아하는 많은 다른 프로젝트들에서 지원됩니다.

**프로그램에 속하지 않은 설정을 자동으로 수정하는 경우, 사용자의 동의를 구하고 정확히 무엇을 하고 있는지 알려주세요.**
기존 설정 파일(예: `/etc/crontab`)에 추가하는 것보다 새로운 설정 파일(예: `/etc/cron.d/myapp`)을 만드는 것을 선호하세요.
시스템 전체 설정 파일에 추가하거나 수정해야 하는 경우, 해당 파일에 날짜가 표시된 주석을 사용하여 추가 내용을 구분하세요.

**우선순위에 따라 설정 매개변수를 적용하세요.**
다음은 설정 매개변수의 우선순위입니다(높은 순서부터 낮은 순서로):

- 플래그
- 실행 중인 셸의 환경 변수
- 프로젝트 수준 설정(예: `.env`)
- 사용자 수준 설정
- 시스템 전체 설정

### 환경 변수 {#environment-variables}

**환경 변수는 명령어가 실행되는 _컨텍스트에 따라 달라지는_ 동작을 위한 것입니다.**
환경 변수의 "환경"은 터미널 세션, 즉 명령어가 실행되는 컨텍스트입니다.
따라서 환경 변수는 명령어가 실행될 때마다, 또는 한 기기의 터미널 세션 간에, 또는 여러 기기에 걸친 하나의 프로젝트 인스턴스 간에 변경될 수 있습니다.

환경 변수는 플래그나 설정 매개변수의 기능을 복제하거나, 이들과 구별될 수 있습니다.
환경 변수가 가장 적절한 시기에 대한 일반적인 설정 유형과 권장사항의 분석은 [설정](#configuration)을 참조하세요.

**최대한의 이식성을 위해, 환경 변수 이름은 대문자, 숫자, 밑줄만 포함해야 하며(숫자로 시작할 수 없음).**
이는 `O_O`와 `OWO`가 유효한 환경 변수 이름이 될 수 있는 유일한 이모티콘이라는 것을 의미합니다.

**단일 줄 환경 변수 값을 목표로 하세요.**
여러 줄 값이 가능하긴 하지만, `env` 명령어와 함께 사용성 문제를 발생시킵니다.

**널리 사용되는 이름을 가로채지 마세요.**
여기 [POSIX 표준 환경 변수 목록](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap08.html)이 있습니다.

**가능한 경우 설정 값에 대한 범용 환경 변수를 확인하세요:**

- `NO_COLOR`, 색상 비활성화(참조: [출력](#output))
- `DEBUG`, 더 자세한 출력 활성화
- `EDITOR`, 사용자에게 파일을 편집하거나 한 줄 이상의 입력을 요청해야 하는 경우
- `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY`, 네트워크 작업을 수행할 경우
  (사용 중인 HTTP 라이브러리가 이미 이들을 확인할 수 있습니다.)
- `SHELL`, 사용자가 선호하는 셸의 대화형 세션을 열어야 하는 경우
  (셸 스크립트를 실행해야 하는 경우 `/bin/sh`와 같은 특정 인터프리터를 사용하세요)
- `TERM`, `TERMINFO`, `TERMCAP`, 터미널별 이스케이프 시퀀스를 사용할 경우
- `TMPDIR`, 임시 파일을 생성할 경우
- `HOME`, 설정 파일 위치 확인
- `PAGER`, 출력을 자동으로 페이징하려는 경우
- `LINES`와 `COLUMNS`, 화면 크기에 따라 달라지는 출력용(예: 표)

**적절한 경우 `.env`에서 환경 변수를 읽으세요.**
명령어가 사용자가 특정 디렉터리에서 작업하는 동안 변경될 가능성이 없는 환경 변수를 정의하는 경우,
사용자가 매번 지정하지 않고도 다른 프로젝트에 대해 다르게 구성할 수 있도록 로컬 `.env` 파일에서 읽어야 합니다.
많은 언어들이 `.env` 파일을 읽기 위한 라이브러리를 가지고 있습니다([Rust](https://crates.io/crates/dotenv), [Node](https://www.npmjs.com/package/dotenv), [Ruby](https://github.com/bkeepers/dotenv)).

**적절한 [설정 파일](#configuration)의 대체물로 `.env`를 사용하지 마세요.**
`.env` 파일에는 많은 제한사항이 있습니다:

- `.env` 파일은 일반적으로 소스 컨트롤에 저장되지 않습니다
- (따라서 그 안에 저장된 모든 설정에는 이력이 없습니다)
- 문자열이라는 단 하나의 데이터 타입만 있습니다
- 잘 구성되지 않기 쉽습니다
- 인코딩 문제가 쉽게 발생할 수 있습니다
- 종종 더 안전하게 저장되어야 할 민감한 자격 증명과 키 자료를 포함합니다

이러한 제한사항이 사용성이나 보안을 저해할 것 같다면, 전용 설정 파일이 더 적절할 수 있습니다.

**환경 변수에서 비밀을 읽지 마세요.**
환경 변수가 비밀을 저장하기에 편리할 수 있지만, 너무 쉽게 유출될 수 있다는 것이 입증되었습니다:
- 내보낸 환경 변수는 모든 프로세스로 전송되며, 거기서 쉽게 로그로 유출되거나 유출될 수 있습니다
- `curl -H "Authorization: Bearer $BEARER_TOKEN"`과 같은 셸 치환은 전역적으로 읽을 수 있는 프로세스 상태로 유출됩니다.
(cURL은 파일에서 민감한 헤더를 읽기 위한 대안으로 `-H @filename`을 제공합니다.)
- Docker 컨테이너 환경 변수는 Docker 데몬에 접근할 수 있는 모든 사람이 `docker inspect`를 통해 볼 수 있습니다
- systemd 유닛의 환경 변수는 `systemctl show`를 통해 전역적으로 읽을 수 있습니다

비밀은 자격 증명 파일, 파이프, `AF_UNIX` 소켓, 비밀 관리 서비스 또는 다른 IPC 메커니즘을 통해서만 받아야 합니다.

### 이름 짓기 {#naming}

> "약어의 집착적인 사용과 대문자 회피를 주목하라. [유닉스]는 반복적 스트레스 장애가 광부들에게 진폐증과 같은 사람들이 발명한 시스템이다.
> 긴 이름들은 강물에 닳은 돌처럼 세 글자로 닳아 없어진다."
> — 닐 스티븐슨, _[태초에 커맨드 라인이 있었다](https://web.stanford.edu/class/cs81n/command.txt)_

CLI에서 프로그램의 이름은 특히 중요하다: 사용자들이 계속해서 타이핑할 것이므로, 기억하고 입력하기 쉬워야 한다.

**간단하고 기억하기 쉬운 단어로 만드세요.**
하지만 너무 일반적이면 다른 명령어들과 충돌하고 사용자들을 혼란스럽게 할 수 있습니다.
예를 들어, ImageMagick과 Windows 모두 `convert` 명령어를 사용했습니다.

**소문자만 사용하고, 꼭 필요한 경우에만 대시를 사용하세요.**
`curl`은 좋은 이름이지만, `DownloadURL`은 그렇지 않습니다.

**짧게 유지하세요.**
사용자들이 항상 입력할 것입니다.
_너무_ 짧게 만들지는 마세요: 가장 짧은 명령어는 `cd`, `ls`, `ps`와 같이 항상 사용되는 일반적인 유틸리티를 위해 예약하는 것이 좋습니다.

**타이핑하기 쉽게 만드세요.**
명령어 이름을 하루종일 타이핑할 것으로 예상된다면, 손쉽게 입력할 수 있도록 만드세요.

실제 사례: Docker Compose가 `docker compose`가 되기 훨씬 전에는 [`plum`](https://github.com/aanand/fig/blob/0eb7d308615bae1ad4be1ca5112ac7b6b6cbfbaf/setup.py#L26)이었습니다.
이는 한 손으로 타이핑하기에 너무 불편한 것으로 판명되어 즉시 [`fig`](https://github.com/aanand/fig/commit/0cafdc9c6c19dab2ef2795979dc8b2f48f623379)로 이름이 변경되었는데, 이는 더 짧을 뿐만 아니라 훨씬 더 자연스럽게 입력할 수 있었습니다.

_추가 읽을거리: [CLI 명령어 이름의 시학](https://smallstep.com/blog/the-poetics-of-cli-command-names/)_

### 배포 {#distribution}

**가능하다면 단일 바이너리로 배포하세요.**
만약 사용하는 언어가 기본적으로 바이너리 실행 파일로 컴파일되지 않는다면, [PyInstaller](https://www.pyinstaller.org/)와 같은 도구가 있는지 확인해보세요.
만약 정말로 단일 바이너리로 배포할 수 없다면, 디스크에 쉽게 제거할 수 없는 파일들을 흩뿌리지 않도록 플랫폼의 기본 패키지 설치 프로그램을 사용하세요.
사용자의 컴퓨터에 부담을 주지 마세요.

만약 코드 린터와 같은 특정 언어를 위한 도구를 만든다면, 이 규칙은 적용되지 않습니다—사용자의 컴퓨터에 해당 언어의 인터프리터가 설치되어 있다고 가정해도 됩니다.

**제거하기 쉽게 만드세요.**
만약 설명이 필요하다면, 설치 설명서의 맨 아래에 넣으세요—사람들이 소프트웨어를 제거하고 싶어하는 가장 흔한 시기 중 하나가 설치 직후입니다.

### 분석 {#analytics}

사용 지표는 사용자들이 프로그램을 어떻게 사용하는지, 어떻게 개선할 수 있는지, 그리고 어디에 노력을 집중해야 하는지 이해하는 데 도움이 될 수 있습니다.
하지만 웹사이트와 달리, 명령줄 사용자들은 자신의 환경을 통제할 수 있기를 기대하며, 프로그램이 알리지 않고 백그라운드에서 작업을 수행하는 것은 놀라운 일입니다.

**동의 없이 사용 데이터나 충돌 데이터를 전송하지 마세요.**
사용자들은 알아낼 것이고, 화를 낼 것입니다.
무엇을 수집하는지, 왜 수집하는지, 얼마나 익명성이 보장되는지, 어떻게 익명화하는지, 그리고 얼마나 오래 보관하는지에 대해 매우 명확하게 밝히세요.

이상적으로는, 사용자들에게 데이터 제공 여부를 물어보세요("옵트인").
만약 기본적으로 활성화하기로 선택했다면("옵트아웃"), 웹사이트나 첫 실행 시 사용자들에게 명확히 알리고, 쉽게 비활성화할 수 있게 만드세요.

사용 통계를 수집하는 프로젝트의 예시:

- Angular.js는 기능 우선순위 지정을 위해 [Google Analytics를 사용하여 상세한 분석 데이터를 수집합니다](https://angular.io/analytics).
  명시적으로 동의해야 합니다.
  조직 내 Angular 사용을 추적하고 싶다면 추적 ID를 자신의 Google Analytics 속성으로 변경할 수 있습니다.
- Homebrew는 Google Analytics에 지표를 전송하며 [좋은 FAQ](https://docs.brew.sh/Analytics)로 그들의 관행을 자세히 설명합니다.
- Next.js는 [익명화된 사용 통계를 수집하며](https://nextjs.org/telemetry) 기본적으로 활성화되어 있습니다.

**분석 데이터 수집의 대안을 고려하세요.**

- 웹 문서에 도구를 삽입하세요.
  CLI 도구를 사람들이 어떻게 사용하는지 알고 싶다면, 가장 잘 이해하고 싶은 사용 사례에 대한 문서를 만들고, 시간이 지남에 따라 어떻게 수행되는지 확인하세요.
  사람들이 문서에서 무엇을 검색하는지 살펴보세요.
- 다운로드에 도구를 삽입하세요.
  이는 사용량과 사용자들이 어떤 운영 체제를 사용하는지 이해하는 데 대략적인 지표가 될 수 있습니다.
- 사용자들과 대화하세요.
  연락하여 사람들에게 도구를 어떻게 사용하는지 물어보세요.
  문서와 저장소에서 피드백과 기능 요청을 장려하고, 피드백을 제출한 사람들로부터 더 많은 맥락을 이끌어내려고 노력하세요.

_추가 읽을거리: [오픈소스 지표](https://opensource.guide/metrics/)_

## 추가 읽을거리

- [유닉스 프로그래밍 환경](https://en.wikipedia.org/wiki/The_Unix_Programming_Environment), Brian W. Kernighan 및 Rob Pike
- [POSIX 유틸리티 규칙](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)
- [모든 프로그램을 위한 프로그램 동작](https://www.gnu.org/prep/standards/html_node/Program-Behavior.html), GNU 코딩 표준
- [12 요소 CLI 앱](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46), Jeff Dickey
- [CLI 스타일 가이드](https://devcenter.heroku.com/articles/cli-style-guide), Heroku
