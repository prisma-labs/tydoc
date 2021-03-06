import { Doc } from '@tydoc/extractor/types'
import React from 'react'
import { CodeBlock } from './CodeBlock'
import { Node } from './Node'
import { Playground } from './Playground'

type ModuleProps = {
  module: Doc.Module
}

export function Module({ module }: ModuleProps) {
  return (
    <div>
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold und">{module.name}</h3>
        <p>{module.tsdoc?.raw}</p>
      </div>

      {/* Types */}
      <div>
        {/* Main export */}
        {module.mainExport !== null && (
          <NamedExport name="Main" type={module.mainExport} />
        )}
        {/* Other exports */}
        {module.namedExports.map((e) => (
          <NamedExport key={`module-${e.name}`} name={e.name} type={e.type} />
        ))}
      </div>
    </div>
  )
}

type NamedExportProps = {
  name: string
  type: Doc.Node
}

function NamedExport(props: NamedExportProps) {
  /* Data */
  const { name, type } = props

  /* View */
  return (
    <div className="my-3">
      {/* Header */}
      <div>
        <h4 className="py-1 text-lg font-medium">{name}</h4>
      </div>

      {/* Playground */}

      <Playground code={``} />

      {/* Type */}
      <CodeBlock>
        <Node node={type} />
      </CodeBlock>
    </div>
  )
}
