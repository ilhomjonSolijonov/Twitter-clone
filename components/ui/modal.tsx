import {ReactElement} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    isStep?: number;
    step?: number;
    totalSteps?: number;

}

export default function Modal({isStep,onClose, isOpen, title, body, step, totalSteps, footer}: ModalProps) {
    return <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-black">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <div className="mt-4">
                        {body}
                    </div>
                    {footer && <div className="mt-4">{footer}</div>}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>;
}