# Greenlight

**Can a two-minute game teach AI safety better than a thirty-minute video? This is a bet that it can.**

🔗 **Live demo:** [your-vercel-url-here](https://) · ⏱️ ~2 minutes · 📱 works on mobile

Greenlight is a playable AI-safety training module. Instead of reading principles, you apply them: you play the person who decides whether a use of AI at work is trustworthy, and call it **Greenlight**, **Flag**, or **Block**. Every scenario is generated live and graded on the spot.

---

## Mini case study: Company K

Company K's mandatory AI safety training has a 25% open rate, and 7% of those who start it don't finish. It's boring, and almost nothing sticks. The targets: **80% completion, 90% retention**, through active learning instead of passive clicking. The content is grounded in [KPMG Canada's Trusted AI Framework](https://kpmg.com/ca/en/services/digital/ai-services/trusted-ai.html).

## The idea

Don't make people read the rules. Make them use them. A judgement call with an immediate, specific consequence sticks far better than a slide you scroll past. Flag something and an **investigate** step makes you name the actual concern, which is where the learning locks in.

## Why it's an agent, not a quiz

- **Fresh every play.** Scenarios are generated live, grounded in the Trusted AI Framework, never memorizable.
- **Reacts to your call.** The verdict changes based on what you chose and why.
- **Investigates.** Flagging requires identifying the real issue, not just sensing something's off.
- **Judges and coaches.** A personalized debrief shows what you nailed and what's worth another look.

## How it works

Single-page app (HTML/CSS/JS), no build step. A serverless function proxies requests to the Claude API and keeps the key off the client. Claude writes each round live; a built-in fallback set means it always plays.

## What I'd do next

Cover the full principle set, add a manager dashboard surfacing completion and weak spots by team, and connect it to the tools people already use so it nudges in context, not just in a module.

## Built with

HTML · CSS · vanilla JavaScript · a serverless function · the Claude API

---

Built by Cleo. Feedback and ideas welcome.
