export interface CodeSnippet {
  id: string;
  label: string;
  filename: string;
  language: string;
  code: string;
}

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'php',
    label: 'PHP',
    filename: 'ProjectResource.php',
    language: 'php',
    code: `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'status' => $this->status,
            'tags' => $this->whenLoaded('tags', fn () => $this->tags->pluck('name')),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }
}`,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    filename: 'fetchProject.ts',
    language: 'typescript',
    code: `export interface Project {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'archived';
}

export async function fetchProject(id: string): Promise<Project> {
  const response = await fetch(\`/api/projects/\${id}\`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(\`Failed to load project: \${response.status}\`);
  }

  return response.json();
}`,
  },
  {
    id: 'python',
    label: 'Python',
    filename: 'normalize_records.py',
    language: 'python',
    code: `from typing import Any

def normalize_records(records: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Map raw rows into a consistent API payload shape."""
    normalized: list[dict[str, Any]] = []

    for row in records:
        record_id = row.get("id")
        if not record_id:
            continue

        normalized.append({
            "id": record_id,
            "label": str(row.get("name", "")).strip(),
            "active": bool(row.get("is_active", False)),
        })

    return normalized`,
  },
];
