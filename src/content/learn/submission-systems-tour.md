---
title: "HotCRP, EasyChair, OpenReview, CMT"
description: "A field guide to the four submission systems you will actually meet."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

# HotCRP, EasyChair, OpenReview, CMT

Your paper does not go to the conference. It goes to a submission system: a website where you upload the PDF, fill in metadata, and later read your reviews. There are four you will meet again and again, and each has a personality.

## The big four

| System | Personality | You will meet it at |
|---|---|---|
| HotCRP | Fast, minimal, beloved by systems folks | Systems and security conferences (SOSP, USENIX) |
| EasyChair | The veteran. Utilitarian, everywhere | Workshops, many CS conferences worldwide |
| OpenReview | Public-facing, reviews often visible | ML venues (ICLR, NeurIPS) |
| CMT | Microsoft's workhorse, form-heavy | Vision and ML conferences (CVPR) |

They all do the same core job. The differences are in the details: OpenReview may show your reviews to the world, HotCRP will email you about every comment, CMT has a topic-selection grid that takes ten minutes to click through.

## Make your account early

Do this the week you decide to submit, not deadline night:

- [ ] Create the account with the email you check daily
- [ ] Confirm the verification email actually arrives
- [ ] Check that co-authors have accounts too (OpenReview profiles can take days to approve for new users)
- [ ] Start a draft submission so you know what fields exist

That last one matters. Some venues ask surprise questions: ethics statements, reproducibility checklists, conflict domains. Better to discover them a week out.

## PDF-only vs source upload

Most venues want a PDF at submission time. Some, and almost all publishers at camera-ready time, want your LaTeX source too. Keep your project tidy enough to zip up on demand. Oleafly exports a source ZIP directly, which is exactly the shape submission systems expect.

## The metadata fields

Beyond the PDF, expect to fill in:

- **Title and abstract**, as plain text. Rewrite any LaTeX math in words or Unicode.
- **Topics**, checkboxes that route your paper to reviewers. Pick honestly.
- **Conflicts**, people and institutions who should not review you: advisors, recent co-authors, colleagues. Getting this wrong can void a review, so be thorough.
- **Anonymity confirmation**, at double-blind venues. See [anonymization for double-blind review](/learn/anonymization-double-blind/).

## The 11:59 AoE reality

Every deadline night, thousands of people submit in the final hour, and the systems get slow. Uploads that took seconds at lunch take minutes at 11:50 PM. The fix is simple and nobody follows it: submit a working version early.

## You can update until the deadline

Here is the liberating part: submission is not one shot. On every major system you can replace your PDF as many times as you like before the deadline closes. So submit a complete-but-imperfect version the day before, and keep polishing. If the network dies at 11:58, you have a real submission in the system instead of a tragedy.

Next stop after submission: understanding what happens on the other side, in [peer review, explained](/learn/peer-review-explained/).
