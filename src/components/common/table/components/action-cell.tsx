"use client";

import React from "react";
//
import Icon from "@/components/common/icon/icon";
import Popover from "@/components/modal/popover";
import PopoverItem from "@/components/modal/popover-item";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
//

interface ActionCellProps {
    user: {
        user_id: string;
        user_role?: string;
    };
    onEdit?: (userId: string) => void;
    onDelete?: (userId: string) => void;
}

export default function ActionCell({
    user,
    onEdit,
    onDelete,
}: ActionCellProps) {
    return (
        <Popover
            Icon={<Icon icon="menu" className="text-base" />}
            position="bottom"
            containerStyles="mr-2"
            contentStyles="flex flex-col w-32"
        >
            {/* Edit */}
            <PopoverItem
                Icon={
                    <FontAwesomeIcon
                        icon={faPen}
                    />
                }
                onClick={() => {
                    onEdit?.(user.user_id);
                }}
            >
                Edit
            </PopoverItem>

            {/* Delete */}
            <PopoverItem
                Icon={
                    <FontAwesomeIcon
                        icon={faTrash}
                    />
                }
                variant="danger"
                onClick={() => {
                    const confirmDelete = window.confirm(
                        "Are you sure you want to delete this user?",
                    );
                    if (confirmDelete) {
                        onDelete?.(user.user_id);
                    }
                }}
            >
                Delete
            </PopoverItem>
        </Popover>
    );
}
