import { Editor } from "@tiptap/core";

import { Separator } from "@/components/ui/separator";
import { AlignmentTooolbar } from "@/components/editor/toolbars/alignment";
import { BoldToolbar } from "@/components/editor/toolbars/bold";
import { BulletListToolbar } from "@/components/editor/toolbars/bullet-list";
import { ColorHighlightToolbar } from "@/components/editor/toolbars/color-and-highlight";
import { ImagePlaceholderToolbar } from "@/components/editor/toolbars/image-placeholder-toolbar";
import { ItalicToolbar } from "@/components/editor/toolbars/italic";
import { LinkToolbar } from "@/components/editor/toolbars/link/button";
import { OrderedListToolbar } from "@/components/editor/toolbars/ordered-list";
import { RedoToolbar } from "@/components/editor/toolbars/redo";
import { SearchAndReplaceToolbar } from "@/components/editor/toolbars/search-and-replace-toolbar";
import { ToolbarProvider } from "@/components/editor/toolbars/toolbar-provider";
import { UnderlineToolbar } from "@/components/editor/toolbars/underline";
import { UndoToolbar } from "@/components/editor/toolbars/undo";
import { HeadingToolbar } from "@/components/editor/toolbars/heading";

function ToolbarBlock({ editor }: { editor: Editor | null }) {
    if (!editor) {
        return null
    }
    return (
        <div className="flex items-center gap-2 pt-2 sticky top-0 z-10 bg-background">
            <ToolbarProvider editor={editor}>
                <UndoToolbar type="button" />
                <RedoToolbar type="button" />
                <Separator orientation="vertical" className="h-7" />
                <HeadingToolbar type="button" />
                <BoldToolbar type="button" />
                <ItalicToolbar type="button" />
                <LinkToolbar type="button" />
                <UnderlineToolbar type="button" />
                <BulletListToolbar type="button" />
                <OrderedListToolbar type="button" />
                <AlignmentTooolbar />
                <ImagePlaceholderToolbar type="button" />
                <ColorHighlightToolbar />
                <SearchAndReplaceToolbar />
            </ToolbarProvider>
        </div>
    )
}

export default ToolbarBlock