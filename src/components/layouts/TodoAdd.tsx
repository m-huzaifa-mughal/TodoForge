import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Field, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"

type Task = {
  title: string
  description: string
}

export function DialogDemo() {
  const [saveBtn, setsaveBtn] = useState<string>("")

  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newTask: Task = {
      title,
      description,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])

    console.log("Saved Tasks:", [...tasks, newTask])

    setTitle("")
    setDescription("")
  }

  return (
    <Dialog>
      <form onSubmit={handleSave}>
        <DialogTrigger asChild>
          <Button variant="outline">
            Create Todo <Plus />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Title</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Enter Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </Field>

            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="Enter Description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}