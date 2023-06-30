import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
}
    from "@/components/ui/alert-dialog";
const alertTitle = "Are you absoluteky sure?";
const alertDesc = "This will kill your ski season";
export default function AlertPage() {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you abolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>{alertDesc}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}