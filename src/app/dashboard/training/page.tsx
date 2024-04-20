"use client"
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ListCollapse, CirclePlus } from 'lucide-react'
import React from 'react'
import Classes from './utils/classes';
import Link from 'next/link';


export default function Training() {
    return (
        <div className="flex flex-col">
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Training</h1>
                <Link href="/dashboard/training/add-training" className="ml-auto gap-1.5 text-sm">
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        <CirclePlus className="size-3.5" />
                        add a training
                    </Button>
                </Link>
            </header>
            <div className='w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-8'>
                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p className="font-bold">DO NOT UNDER ANY CIRCUMSTANCES IMPROVISE!!</p>
                    <p> This is the training section feel free to access this in your alone time if there's an emergency keep an eye on the emergency conversation training will be added to you there by proffessionals .</p>
                </div>
                <Classes />

            </div>
        </div>
    )
}


