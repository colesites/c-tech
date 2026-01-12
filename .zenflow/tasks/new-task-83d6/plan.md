# Spec and build

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Implementation
<!-- chat-id: fcfc5bb1-1d04-49e6-b8a8-ca7ad04204d4 -->

Implement the task according to the technical specification and general engineering best practices.

1. Break the task into steps where possible.
2. Implement the required changes in the codebase.
3. Add and run relevant tests and linters.
4. Perform basic manual verification if applicable.
5. After completion, write a report to `{@artifacts_path}/report.md` describing:
   - What was implemented
   - How the solution was tested
   - The biggest issues or challenges encountered
