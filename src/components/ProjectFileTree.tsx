"use client";

// A single-island composition of Magic UI's file-tree (Tree/Folder/File use
// React context, which can't cross Astro island boundaries).
import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function ProjectFileTree() {
  return (
    <Tree
      className="overflow-hidden rounded-none bg-transparent p-1 font-mono text-[13px]"
      initialExpandedItems={["root", "git", "figures"]}
    >
      <Folder element="~/.openleaf/projects/resume" value="root">
        <Folder element=".git" value="git">
          <File value="git-head">
            <p>HEAD</p>
          </File>
          <File value="git-refs">
            <p>refs/heads/faang</p>
          </File>
        </Folder>
        <Folder element="figures" value="figures">
          <File value="fig-plot">
            <p>timeline.tex</p>
          </File>
        </Folder>
        <Folder element="fonts" value="fonts">
          <File value="font-lato">
            <p>Lato-Regular.ttf</p>
          </File>
        </Folder>
        <File value="main">
          <p>main.tex</p>
        </File>
        <File value="refs">
          <p>refs.bib</p>
        </File>
        <File value="project">
          <p>project.json</p>
        </File>
      </Folder>
    </Tree>
  );
}
