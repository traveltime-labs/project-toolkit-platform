"use client";

// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addPost } from "@/services/post";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";

// interface CommentEditorProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

const CommentEditor = (/*{ isOpen, setIsOpen }: CommentEditorProps*/) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate: addPostMutate, isPending} = useMutation({
    mutationFn: addPost,
  })

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";

  const queryClient = useQueryClient();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const router = useRouter();

  const onPost = () => {
    if (isPending) return;
    if (!title || !content) return alert('please fill in all fields');
    addPostMutate({title, content}, {
      onSuccess: () => {
        // setIsOpen(false);
        setTitle("");
        setContent("");
        queryClient.invalidateQueries({queryKey: ['posts', currentPage]}); // 刷新頁面
        // 如果不是在第一頁，跳轉到第一頁
        if(currentPage != '1') {
          console.log('不是在第一頁面')
          router.push('/?page=1')
        }
      }
    })
  }

  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            請選擇設定
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        <div className="grid gap-4">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          tag: 先用checkbox 寫死
          <div className="flex items-start gap-3">
            <Checkbox id="toggle"  />
            <Label htmlFor="toggle">Enable notifications</Label>
          </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
            <Textarea placeholder="Type your message here." />
          </div>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentEditor;
