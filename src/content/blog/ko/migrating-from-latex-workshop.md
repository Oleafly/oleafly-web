---

title: "LaTeX 워크샵 너머: 컴퓨터의 연구 편집자"
description: "프로젝트 전반의 인텔리전스, SyncTeX, 오프라인 교정, 번들 컴파일러, 실제 Git 및 인용 기능을 갖춘 특수 목적 연구 편집기입니다. VS Code + LaTeX Workshop은 여전히 ​​레시피, 원격 및 확장 마켓플레이스를 소유하고 있습니다."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

VS Code의 [LaTeX 워크샵](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)은 훌륭합니다. 무료, MIT, 신중하게 관리됩니다. 한 주가 자유 형식 컴파일 레시피, texdoc, Docker/WSL/remote, Live Share 또는 전체 확장 마켓플레이스에서 실행되는 경우 해당 스택을 유지하세요. 그 삶을 위해 만들어졌습니다.

이 게시물은 다중 파일 논문, 컴파일러, PDF, Git, 인용, 그림 및 교정이 이미 함께 연결된 문서 우선 앱을 원하는 경우를 위한 것입니다. 무료 및 오픈 소스(AGPL). LaTeX, Typst, 마크다운. 일반 폴더. 계정이 없습니다.

기능 맵 및 단축키: [LaTeX 워크샵에서 제공](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## 편집자

LaTeX, Typst, Markdown 및 BibTeX 전반에 걸쳐 프로젝트 전체 인덱스를 갖춘 CodeMirror 6.

실제로 매일 얻는 것:

- 정의로 이동, 참조 찾기, 라벨 및 매크로 이름 변경(충돌 경고)
- 손상된 참조, 잘못된 인용, 누락된 포함(`\cref`, `\eqref`, 범위 참조 등)에 대한 실시간 검사
- 로컬 + 프로젝트 구조 보기; 필터와 점프
- 프로젝트가 정의하는 키, 경로 및 매크로에 대한 완성(`\newcommand`, xparse 인수 모양)
- `.tex`, `.ltx`, `.sty`, `.cls` 지원; 인수 조각; 환경 점검
- LaTeX용 TexLab(선택 설정) Typst용 Tinymist 선박
- 통합 진단: 구문, 컴파일, 언어 서비스, 참조, 인용, 철자법, 문법
- 라이브 KaTeX 수학 미리보기; 소스는 편집 가능한 상태로 유지됩니다.
- Harper + Hunspell은 산문에서만 오프라인으로 사용 가능(명령 및 수학 마스크됨)
- 일반적인 구조에 대한 시각적 모드; 정력; 슬래시 명령; 다중 파일 탭
- 대규모 코퍼스의 패키지 인식 명령 완성이 다음 단계에 도달합니다(LaTeX Workshop의 MIT 데이터, 속성 제공)

PDF 작업 영역: 연속 스크롤, 스프레드, 검색, 개요, 분리 가능한 창. 챕터 파일 전반에 걸친 양방향 SyncTeX. 재구축이 보류되는 동안에도 매핑이 계속 작동합니다. 마지막으로 좋은 PDF가 계속 유지됩니다. 컴파일된 소스 세트를 실행 취소하면 전체 재컴파일 없이 미리보기가 현재 상태로 전환될 수 있습니다.

책 규모 CI: ~6,200줄 원고, 다가구 수학, 장, 인용, 교정, 스크롤/입력/붙여넣기/실행 취소/완료/재컴파일/SyncTeX 성능 예산.

LaTeX Workshop은 일반 IDE의 강력한 확장입니다. Oleafly는 이 문서 루프를 이미 조립하여 배송하므로 매 학기마다 설정 및 마켓플레이스 선택에서 동일한 스택을 연결하지 않아도 됩니다.

## 앱의 컴파일러

Tectonic(LaTeX) 및 Typst가 앱과 함께 제공됩니다. 필요할 때 관리형 Pandoc을 통해 마크다운하세요. 먼저 캐시 패키지를 컴파일합니다. 그 후에는 캐시된 빌드가 오프라인으로 작동합니다. 오프라인 모드에서는 컴파일러를 캐시에 잠글 수 있습니다.

자동 컴파일(디바운스됨, 취소 가능, 최신 승리) `Cmd/Ctrl-Enter`를 다시 컴파일합니다. 중지 버튼. 인간화된 오류 카드가 라인에 있습니다. 최신 빌드가 실행되는 동안 마지막으로 좋은 PDF입니다.

레시피, latexmk 체인, 쉘 이스케이프 및 사용자 정의 `.latexmkrc`는 LaTeX Workshop의 조타실에 유지됩니다. 대부분의 논문과 논문에는 신뢰할 수 있는 감독 엔진만 필요합니다.

템플릿: 23개의 번들 스타터(IEEE, ACM, Elsevier, Beamer, 논문, 이력서, Typst 공백 등)와 99개의 다운로드 가능한 팩. 모든 프로젝트를 템플릿으로 저장하세요. 모델이 설정될 때 선택적 AI 템플릿 생성.

## 라이브러리, Git, 연구 도구

책으로서의 프로젝트: 표지 색상, 엔진 배지, 포크 계보, 마지막 PDF 페이지의 마우스 오버 미리보기, 북마크, 모든 문서에 대한 `/docs` 검색. Fork는 제출 사본 옆에 위험한 재작성을 위해 전체 Git 기록을 보관합니다.

첫날부터 실제 Git. 스테이징, 병렬 비교(작업 트리 편집 가능), 삭제, 복원. 성공적인 컴파일 및 유휴 편집 후 자동 체크포인트 AI는 첫 번째 쓰기 전에 체크포인트를 실행합니다. GitHub 선택 사항(PAT 또는 장치 흐름 OAuth). 터미널 `git log`가 앱과 일치합니다.

DOI / arXiv / 제목 → dedupe → `.bib` → `\cite`를 붙여넣습니다. BibTeX, RIS, EndNote, Zotero RDF 일괄 가져오기. arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex에서 인용 검색이 가능합니다. 편집 가능한 TikZ에 대한 다이어그램 작성기. 비전 모델을 갖춘 유효성 검사기, 테이블, 방정식, 실험실 검색, 마감일, PDF-LaTeX, 이미지-LaTeX.

## 선택적 AI

구성할 때까지 꺼집니다. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. 디스크에 암호화된 키. 요청은 귀하가 선택한 제공업체로 전달됩니다.

보조자는 편집, 컴파일, 로그 읽기, PDF 텍스트 추출, 문헌 검색, 계획 유지 등을 수행합니다. 쓰기는 승인 차이입니다. 삭제에는 별도의 확인이 필요합니다. 선택 항목에 대한 인라인 Ask-AI. Claude Code, Cursor 및 친구들을 위한 루프백 MCP. AI를 꺼도 편집기, 컴파일, Git 및 인용은 계속 작동합니다.

## 프리플라이트, 내보내기, 개인 정보 보호

프리플라이트: 구조, 정의되지 않은 참조, 중복 레이블, 파서 스타일 추출 미리보기, 화면 판독기 중심 결과. 각 위험 플래그에는 블랙박스 점수를 신뢰하는 대신 직접 확인할 수 있을 만큼 충분한 컨텍스트가 제공됩니다.

내보내기: 항상 PDF; Pandoc을 사용할 수 있는 경우 DOCX/HTML/Markdown; 데크용 PowerPoint; 도서용 EPUB; 핸드오프용 소스 ZIP.

Oleafly 계정이 없습니다. 제품 원격 측정이 없습니다. 충돌 보고서는 검토한 미리 채워진 GitHub 문제를 엽니다. 패키지, 템플릿, 호스팅 AI, 인용, 업데이트, GitHub를 위한 네트워크입니다. 편집, 캐시된 컴파일, 문법, 맞춤법 검사 및 로컬 Git이 오프라인으로 작동합니다.

## LaTeX Workshop이 여전히 적합한 경우

- 자유 형식 레시피, latexmk, shell-escape, `.latexmkrc`
- 편집기의 texdoc
- Docker, WSL, 원격 개발
- 라이브 공유 및 라이브 다중 사용자 편집
- 문서 이외의 작업을 위해 VS Code 마켓플레이스에 거주

Oleafly는 공개 베타 버전입니다. 무거운 게시자 클래스 파일은 여전히 ​​Tectonic에서 이동할 수 있습니다. 그들을 신고하세요.

## 시도해 보세요

1. 다음에서 다운로드하세요.
   [릴리스 페이지](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS 서명/공증, Windows는 SmartScreen을 한 번만 수행할 수 있음)
2. `.tex`, `.bib` 및 그림을 가져옵니다(또는 템플릿에서 시작).
3. 한 번 정리한 뒤, 하루 동안 실제 종이에 써보세요.

VS Code를 설치된 상태로 유지하세요. 두 앱 모두에서 동일한 파일이 작동합니다. Oleafly에서 실제 논문의 하루가 더 좋아지면 더 많은 프로젝트를 이전하세요. 특정 나무에 대한 레시피와 리모컨이 여전히 이기면 해당 나무를 워크샵에 남겨두세요.