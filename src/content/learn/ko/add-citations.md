---

title: ".bib 키에서 텍스트 내 인용으로"
description: "인용 및 참고문헌 명령이 포함된 일반적인 BibTeX 루프입니다."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# .bib 키에서 텍스트 내 인용까지

LaTeX에서 소스를 인용하는 데는 두 가지 부분이 포함됩니다. 각 작업을 한 번 설명하는 일반 텍스트 데이터베이스와 키로 항목을 가리키는 문서의 '\cite' 명령입니다. LaTeX는 인용 번호를 매기고, 참조 목록의 형식을 지정하며, 섹션 순서를 바꾸거나 소스를 추가할 때 모든 항목의 일관성을 유지합니다. "[12]"를 직접 입력하거나 직접 번호를 다시 매기는 일은 절대 없습니다.

## 문서의 명령

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}`는 인용이 속한 위치에 텍스트 내 마커를 삽입합니다. 하단에 있는 두 명령이 나머지 작업을 수행합니다. `\bibliographystyle{plain}`은 인용 및 참조 형식을 선택하고, `\bibliography{refs}`는 데이터베이스 파일의 이름을 지정하고(`.bib` 확장자 제외) 참조 목록을 인쇄해야 하는 위치를 표시합니다. 일반적으로 `\end{document}` 바로 앞에 있습니다. 실제로 인용한 출처만 목록에 나타납니다.

## 데이터베이스의 항목

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

이는 `main.tex` 옆에 있는 별도의 파일인 `refs.bib`에 있습니다. `@` 뒤의 단어는 항목 유형이고, `knuth84`는 인용 키이며, 나머지는 형식화된 참조를 작성하기 위해 스타일이 사용하는 필드입니다. 키는 두 파일 사이의 유일한 링크이므로 대문자 사용을 포함하여 `\cite` 인수와 정확히 일치해야 합니다. [BibTeX 유효성 검사기](/tools/bibtex-validator/)를 사용하면 전체 데이터베이스에서 누락된 필드와 잘못된 형식의 항목을 확인할 수 있습니다.

## 한 번의 컴파일로는 충분하지 않은 이유

참고문헌은 별도의 프로그램으로 작성됩니다. 첫 번째 LaTeX 패스에서 문서는 인용된 키 목록을 보조 파일에 기록합니다. 그런 다음 `bibtex` 프로그램은 해당 목록을 읽고 `refs.bib`에서 일치하는 항목을 가져와서 형식을 지정합니다. 두 개의 추가 LaTeX 패스는 결과를 다시 접어 텍스트 내 마커를 해결합니다. Oleafly는 모든 컴파일에서 이 전체 주기를 실행합니다. 직접 작성하고 중간 단계를 건너뛰면 인용이 굵은 물음표로 표시됩니다. 그런 경우에는 [미스터리 인용 표시 지우기](/learn/citation-question-mark/)를 참조하세요.

## 여기서 어디로 가야하나요?

단일 `.bib` 파일은 작성하는 모든 논문을 처리할 수 있으므로 신중하게 작성하는 것이 좋습니다. [지속적인 .bib 구축](/learn/create-bibliography/)에서는 10년 동안 유지되는 항목 유형, 필수 필드, 키를 다룹니다. 장소가 다른 모습을 원할 경우 [숫자, 저자 연도, 저널 스타일](/learn/change-citation-style/)에 설명된 대로 항목이 아닌 한 줄을 변경하면 됩니다.