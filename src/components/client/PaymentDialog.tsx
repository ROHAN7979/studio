'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import QRCode from 'react-qr-code';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
  onConfirm: () => void;
}

export function PaymentDialog({ open, onOpenChange, totalAmount, onConfirm }: PaymentDialogProps) {
  const upiLink = `upi://pay?pa=ltts-smart-eats@payment&am=${totalAmount.toFixed(2)}&tn=LTTS%20Smart%20Eats%20Order`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Complete Your Payment</DialogTitle>
          <DialogDescription>
            Scan the QR code with your UPI app or click confirm to simulate payment.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <div className="flex justify-center p-4 bg-white rounded-lg">
            <QRCode value={upiLink} size={192} />
          </div>
          <p className="mt-2 text-sm text-center text-muted-foreground">
            Payable Amount: <strong>Rs. {totalAmount.toFixed(2)}</strong>
          </p>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="outline">Cancel</Button>
          <Button onClick={onConfirm} className="font-bold">Confirm Payment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
