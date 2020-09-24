import { Command } from '../Editor'

type InsertTextCommand = (value: string) => Command

declare module '../Editor' {
  interface Commands {
    insertText: InsertTextCommand,
  }
}

export const insertText: InsertTextCommand = value => ({ tr }) => {
  tr.insertText(value)

  return true
}