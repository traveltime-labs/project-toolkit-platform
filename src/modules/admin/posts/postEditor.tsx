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
      <div className="w-full text-right">
        <DialogTrigger >新增文章</DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>新增文章</DialogTitle>
          <DialogDescription>
            新增文章
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">圖片</Label>
            <Input id="picture" type="file" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <Label htmlFor="picture">選擇分類</Label>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="小工具">小工具</SelectItem>
              <SelectItem value="套件">套件</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <Label htmlFor="picture">選擇群組</Label>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="文字">文字</SelectItem>
              <SelectItem value="JSON">JSON</SelectItem>
            </SelectContent>
          </Select>
          選擇標籤（可多選）：
          <div className="flex items-start gap-3">
            <Checkbox id="JSON"  />
            <Label htmlFor="JSON">JSON</Label>
            <Checkbox id="React"  />
            <Label htmlFor="React">React</Label>
            <Checkbox id="壓縮"  />
            <Label htmlFor="壓縮">壓縮</Label>
          </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">title</Label>
              <Input id="name-1" name="name" defaultValue="title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">author</Label>
              <Input id="author" name="author" defaultValue="@peduarte" />
            </div>
            <Textarea placeholder="詳細描述" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">取消</Button>
            </DialogClose>
            <Button type="submit">儲存</Button>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentEditor;
