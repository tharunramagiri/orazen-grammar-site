'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Lint {
  message: string
  span: { start: number; end: number }
  lintKind: string
}

const DEFAULT_TEXT = "This is an test of the grammar checker. It don't take long to find mistake's."

export default function GrammarDemo() {
  const [text, setText] = useState(DEFAULT_TEXT)
  const [lints, setLints] = useState<Lint[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const linterRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      try {
        const { binaryInlined } = await import('harper.js/binaryInlined')
        const { WorkerLinter } = await import('harper.js')
        const linter = new WorkerLinter({ binary: binaryInlined })
        if (cancelled) return
        linterRef.current = linter
        setStatus('ready')
      } catch (err) {
        console.error('Failed to load Harper:', err)
        if (!cancelled) setStatus('error')
      }
    }

    init()
    return () => {
      cancelled = true
    }
  }, [])

  const runLint = useCallback(async (value: string) => {
    if (!linterRef.current) return
    try {
      const results = await linterRef.current.lint(value)
      setLints(
        results.map((l: any) => ({
          message: l.message(),
          span: { start: l.span().start, end: l.span().end },
          lintKind: typeof l.lint_kind === 'function' ? l.lint_kind() : 'Issue',
        })),
      )
    } catch (err) {
      console.error('Lint failed:', err)
    }
  }, [])

  useEffect(() => {
    if (status === 'ready') {
      runLint(text)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)
    runLint(value)
  }

  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Try it live</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === 'ready'
              ? 'bg-green-100 text-green-700'
              : status === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-gray-100 text-gray-500'
          }`}
        >
          {status === 'loading' && 'Loading grammar engine…'}
          {status === 'ready' && 'Running in your browser'}
          {status === 'error' && 'Failed to load — try refreshing'}
        </span>
      </div>

      <textarea
        value={text}
        onChange={handleChange}
        rows={6}
        disabled={status !== 'ready'}
        className="w-full p-5 text-lg leading-relaxed resize-none focus:outline-none disabled:opacity-50"
        placeholder="Start typing to see live suggestions…"
      />

      <div className="border-t border-gray-200 px-5 py-4 bg-gray-50">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
          {lints.length === 0 && status === 'ready'
            ? 'No issues found'
            : `${lints.length} suggestion${lints.length === 1 ? '' : 's'}`}
        </p>
        {lints.length > 0 && (
          <ul className="space-y-1.5">
            {lints.slice(0, 8).map((lint, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-primary mt-0.5">&bull;</span>
                <span>{lint.message}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
